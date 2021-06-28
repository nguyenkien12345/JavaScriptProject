import { FAKE_STUDENT_LIST } from "./fake-data.js";

export const getAll = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(FAKE_STUDENT_LIST);
        }, 250);
    });
};

export default {getAll};