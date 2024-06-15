import axios from "axios";
import { machineCommand, commandMachines, lastMachineHistory } from "../../contexts/Machines/Machines.interfaces";
import { apartment } from "../../contexts/Apartments/Apartments.interfaces";

const api = axios.create({
  baseURL: import.meta.env.VITE_URL_BASE,
});

export const signIn = async(data: any): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.post("/auth/signin", data);
      console.log("RESULTADO: ", result);
      resolve(result.data);
    } catch (error) {
      console.log("ERROR: ", error)
      reject(error);
    }
  });
}

export const findCommandMachines = async (): Promise<commandMachines[]> => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.get("/machines/all");
      resolve(result.data);
    } catch (err) {
      reject(err);
    }
  });
};

export const findLastMachineHistory = async (): Promise<lastMachineHistory[]> => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.get("/machine-history/last");
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

export const findAllApartments = async (): Promise<apartment[]> => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.get("/apartments");
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

export const changeMachineCommand = async (data: machineCommand): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      const credentials = {
        email: "andersonlaguiar@gmail.com",
        password: "12aA523!"
      }
      const token = await signIn(credentials);
      
      const result = await api.post("/machines/usemachine", data, {
        headers: {
          Authorization: `Bearer ${token.body.token}`,
        }
      });
      resolve(result);
    } catch (error: any) {
      console.log(error.response.data);
      reject(error.response.data);
    }
  });
};
