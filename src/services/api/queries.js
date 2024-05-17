import { instance } from "./fetcher";

const getData = async (path) => 
(await instance.get(path)).data;

export { getData };
