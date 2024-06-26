const mongoose = require('mongoose');

// mongoose.connect("mongodb://0.0.0.0:27017/Whatsapp-clone")

mongoose.connect("mongodb+srv://samadali0125:Samad%40123@cluster0.ed4mh9k.mongodb.net/Whatsapp?retryWrites=true&w=majority&appName=Cluster0")
    .then(function() {
        console.log("DB connected successfully.");
    })
    .catch(function(error) {
        console.log("There was an Error while connecting to a database.", error);
    });


const plm = require('passport-local-mongoose')

const userSchema = mongoose.Schema({
    username: String,
    number: Number,
    password: String,
    profileImage: {
        type: String,
        default: `data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQDxAQDRAQDhEPDw0QDQ0RDQ8NEg0QFREXFhYRExUYHSggGBolGxMTLTEhJikrLi4uGB8zOD8tNygtLisBCgoKDQ0NDg0NDysZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAAABAIDBQEGB//EACwQAQABAgQFAwMFAQAAAAAAAAABAgMEESExQVFhcZESgbEiMqEFQlKSwdH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AP3EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaq78R17NNWInhp+QViCbkzxnyxB0RzmUVzG0z5BeI6cRVx1bqMRE76A3AAAAAAAAAAAAAAAAAAA13rvp78IB7cuRTv4S3Lsz0jkwqnPWXioAANVWIpjr2T373q0jb5agWRiKesd4bonk5rZauzTPTjALh5E56w9BnbuTTt4VWrsVdJ5IiJB0RpsXs9J3+W5FAAAAAAAAAAAAAAYXa/TGfhFVOc5yzvXPVPSNmtQAEGnFV5U5c/huS4udY7AnAAABVhK945awoRYafqjrmtAAAiVtm56o6xuiZW68pz89gXjyJzeooAAAAAAAAAA1YivKnvo2pMVV9WXKAaQFQAASYv7vaPmVafGU7T7AlAAABtw/3R7/C1JhKdZnlCsAAAAFWFr0y5fDeisVZVR10WooAAAAAAAAAAguTnVPeV7nAAKgAAxrpziYniyAc6qnKcpeL7tqKt9+EpqsPVG2vuDS9iGynD1csu8qLVmKes8wZWaPTGXnuzAAAAACJdGHOX2/tjtHwisgAAAAAAAAAHOdFBcjKZ7yDEBUATYm9wj3n/AAFE1RG8xHvD1zWdu5NO3gF40UYmJ30/MNsVxwmPIMhjNcc48w114imNtQbmPrjnHmEdy7NW+3JrB0hJh72U5TtO3RWAAAvt/bHaPhA6EQivQAAAAAAAAAEeJp+rusacTTnGfL4BIAqPJnLXk58znOfNXiqsqe+iMAAAAAAAAB0LdWcRLnqsJVpMctQUAAzs051R5XJ8JRvPtChFAAAAAAAAAAAAQ3aPTOXjswW3rfqjrwRVaZ58N1RHiqs6suUNL2qc5mebwAAAAAAAABssVZVR10awHSe0U5zlDC3VnETzW4e1lGc7z+AbaYyjKOD0EUAAAAAAAAAAAATY2xNVM+n7vlSA+dmMtJ0mN45PHaxWEpr12q4Vf9cq/YqonKqO08J91RqAAAAAAAAGdq1VVOVMZ/53dXCYKKNavqq/FPYGP6fh5ppzr33iOXdaCKAAAAAAAAAAAAAAAAPKqYmMpjOOU6vQEN79NpnWifT03hFcwVyn9ufWnV2wHzsxlvp30ePopjPfVhNij+FP9YBwCHfixR/Cn+sM6aYjaIjtGQOJbwlyramY6z9Kyz+mR++c+kaR5dABjboimMqYiI5QyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/2Q==`
    },
    socketId: String,
})

userSchema.plugin(plm)

module.exports = mongoose.model('user', userSchema)