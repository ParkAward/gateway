import mysql from "mysql2/promise";

const dbConnect = async () => {
  try {
    const connection = await mysql.createConnection({
      host: "db",
      user: "root",
      password: "root",
      database: "SampleDB",
    });
  } catch (error) {
    console.log(error);
  }
};

dbConnect();
