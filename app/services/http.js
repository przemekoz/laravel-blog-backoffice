import Service from '@ember/service';
import axios from 'axios';

export default class HttpService extends Service {
  async get(path) {
    try {
      const response = await axios.get(path);
      const data = response.data;

      // seems like Ember Data do something similar ;)
      if (data.data && data.data.length) {
        data.data = data.data.map(item => {
          const newitem = { ...item };
          delete newitem.attributes;
          return { ...newitem, ...item.attributes };
        });
      } else {
        const newitem = { ...data.data };
        delete newitem.attributes;
        data.data = { ...newitem, ...data.data.attributes };
      }
      // e: seems like Ember Data do something similar ;)

      return data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async delete(path) {
    try {
      const response = await axios.delete(path);
      // console.log(response);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async post(path, data) {
    try {
      const response = await axios.post(path, data);
      // console.log(response);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  handleError(error) {
    console.error("HttpService Error!", error);
  }
}
