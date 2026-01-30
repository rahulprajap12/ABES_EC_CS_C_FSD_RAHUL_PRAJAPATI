import fs from 'fs'

const writeFileSyncCustom = (path, data) => {
  try {
    fs.writeFileSync(path, data)
    console.log("data has been success")
  } catch (error) {
    console.log(error)
  }
}

writeFileSyncCustom("./ex.txt", "Hello Node.js")

const readFileSyncCustom = (path) => {
  try {
    const data = fs.readFileSync(path, "utf-8")
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

readFileSyncCustom("./ex.txt")
