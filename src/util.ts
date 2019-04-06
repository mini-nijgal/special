import MD5 from "md5.js";
import Person from "./Person";

export const encrypt = (persons: Person[]) => {
  const json = JSON.stringify(persons);
  const data = btoa(json);
  return {
    data,
    token: new MD5().update(data).digest("hex")
  };
};

export const decrypt = (data: string, token: string): Person[] | null => {
  if (new MD5().update(data).digest("hex") !== token) return null;
  const json = atob(data);
  return JSON.parse(json);
};

export const generateLink = (persons: Person[]) => {
  const { data, token } = encrypt(persons);
  return `${window.location.origin}${window.location.pathname}?data=${data}&token=${token}`;
};