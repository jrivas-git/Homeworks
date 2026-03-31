import { db } from "../firebase/config";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc
} from "firebase/firestore";

export interface Task {
  id?: string;
  text: string;
  done: boolean;
}

export const useTasks = () => {

  const ref = collection(db, "tasks");

  const getTasks = async (): Promise<Task[]> => {
    const data = await getDocs(ref);
    return data.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as Task)
    }));
  };

  const addTask = (task: Task) => {
    return addDoc(ref, task);
  };

  const deleteTask = (id: string) => {
    return deleteDoc(doc(db, "tasks", id));
  };

  const toggleTask = async (task: Task) => {
    return updateDoc(doc(db, "tasks", task.id!), {
      done: !task.done
    });
  };

  return { getTasks, addTask, deleteTask, toggleTask };
};