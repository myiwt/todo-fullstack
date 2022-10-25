import { APIS } from "./configs";
import http from "./http";

class APIService {
  getAllTodos() {
    return http.get(APIS.GET_ALL);
  }
  create(todo) {
    return http.post(APIS.CREATE, todo);
  }
  update(todo) {
    return http.put(`${APIS.UPDATE}/${todo.id}`, todo);
  }
  delete(id) {
    return http.delete(`${APIS.DELETE}${id}`);
  }
}

export default new APIService();
