// rcc
import axios from 'axios';

// .env REACT_APP_BACKEND_URL
const BASE_URL = process.env.REACT_APP_BACKEND_URL;

// CLASS REACT API SERVICE

// export default class BlogCategoryApiService
class BlogCategoryApiService {
  ////////////////////////////////////////////////////////////////////////////////////////////////////
  // SPEED DATA
  // http://localhost:4444/blog/category/api/v1/speed/10
  // @GetMapping(value="/speed/{id}")
  categoryApiSpeedData(data) {
    return axios.get(BASE_URL + `/blog/category/api/v1/speed/${data}`);
  }

  // ALL DELETE
  // http://localhost:4444/blog/category/api/v1/delete/all
  // @DeleteMapping(value="/delete/all")
  categoryApiAllDelete() {
    return axios.delete(BASE_URL + `/blog/category/api/v1/delete/all`);
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////
  // CREATE
  // http://localhost:4444/blog/category/api/v1/create
  // @PostMapping("/create")
  objectApiCreate(categoryDto) {
    return axios.post(BASE_URL + `/blog/category/api/v1/create`, categoryDto);
  }

  // LIST
  // http://localhost:4444/blog/category/api/v1/list
  // @GetMapping(value="/list")
  objectApiList() {
    return axios.get(BASE_URL + `/blog/category/api/v1/list`);
  }

  // FIND
  // http://localhost:4444/blog/category/api/v1/find/1
  // @GetMapping(value="/find/{id}")
  objectApiFindById(id) {
    return axios.get(BASE_URL + `/blog/category/api/v1/find/${id}`);
  }

  // UPDATE
  // http://localhost:4444/blog/category/api/v1/update/1
  // @PutMapping(value="/update/{id}")
  objectApiUpdate(id, categoryDto) {
    return axios.put(BASE_URL + `/blog/category/api/v1/update/${id}`, categoryDto);
  }

  // DELETE BY ID
  // http://localhost:4444/blog/category/api/v1/delete/1
  // @DeleteMapping(value="/delete/{id}")
  objectApiDelete(id) {
    return axios.delete(BASE_URL + `/blog/category/api/v1/delete/${id}`);
  }
} // end class

// EXPORT DEFAULT INSTANCE
// eslint-disable-next-line import/no-anonymous-default-export
export default new BlogCategoryApiService();
