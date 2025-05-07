class Book {

    title: string;
    author: string;
    yearPublished: number;

    constructor(title: string, author: string, yearPublished: number){
        if (yearPublished < 0) {
            throw new Error('Year cannot be negative');
        }
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
    }

    bookDetalils(){
        console.log(`${this.title} by ${this.author}, published in ${this.yearPublished}.`);
    }

    isAClassic(){
        const currentDate = new Date();

        if (currentDate.getFullYear() - this.yearPublished > 50) {
            console.log(`${this.title} is considered a classic`);
        } else {
            console.log(`${this.title} is not considered a classic`);
        }
    }


}
