import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = `&api_key=${process.env.REACT_APP_API_KEY}`;

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
// get all books

  getBooks: function(){
    return axios.get("/api/books");
  },
  searchBooks: function(t){
    return axios.post("/search", {title: t});
  },
  addBook: function(bookData) {
    return axios.delete(`/api/books`, bookData);
  },
  deleteBook: function(id){
    return axios.delete(`/api/books/${id}`);
  },
  getGoogleBooks: function(title) {
    return axios.get(BASEURL + title + APIKEY);
  }
};
