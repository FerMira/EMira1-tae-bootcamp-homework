class UserData {

    userID: number;
    userName: string;

    constructor(userID: number, userName: string) {
        this.userID = userID;
        this.userName = userName;
    }

}

class BookData {

    bookID: number;
    bookName: string;


    constructor(bookID: number, bookName: string) {
        this.bookID = bookID;
        this.bookName = bookName;
    }

}

function fetchBook(_bookID: number): Promise<BookData> {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const random = Math.random();

            if (random < 0.2) {
                reject(`Error occurred!`);
            } else {
                console.log("Book: " + resolve(this.bookName));
            }
        });
    })
}


function fetchUser(_userID: number): Promise<UserData> {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const random = Math.random();

            if (random < 0.2) {
                reject(`Error occurred!`);
            } else {
                console.log("User: " + resolve(this.userName));
            }
        });
    })
}

async function borrowBook(userID: number, bookID: number) {

    try{
        console.log("Fetching user...");
        console.log("Fetching book...");
        fetchUser(userID);
        fetchBook(bookID);
    } catch (error) {
        console.error("Failed to fetch book.", error);
    } finally {
        console.log("Borrow operation completed.");
    }

}

const userFirst = new UserData(1234, "Alicia");
const bookFirst = new BookData(111, "Alice in Wonderland");

borrowBook(1234, 111);
