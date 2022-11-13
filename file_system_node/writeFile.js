import fs from "fs/promises";


const filePath = new URL("student_info.txt", import.meta.url);

// await fs.writeFile(filePath, "some text");

await fs.appendFile(filePath, "\n6. this is adding line at 6");
