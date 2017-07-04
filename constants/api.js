import axios from 'axios';
import { Platform } from 'react-native';

let url;

// Cause of genymotion we need to change the url here
// http://stackoverflow.com/questions/5528850/how-to-connect-localhost-in-android-emulator
if (Platform.OS !== 'ios') {
  url = 'http://10.0.3.2:3000/api';
} else {
  url = 'http://localhost:3000/api';
}

axios.defaults.baseURL = url;

const fakeGroupId = '594c7175d416c7433a66c410';

class MeetupApi {
  constructor() {
    this.groupId = fakeGroupId;
    this.path = `/groups/${this.groupId}/meetups`;
  }

  async fetchGroupMeetups() {
    try {
      const { data } = await axios.get(this.path);
      return data.meetups;
    } catch (e) {
      throw e;
    }
  }

  async createGroupMeetup(args) {
    try {
      const res = await axios.post(`${this.path}/new`, { ...args });
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
    }
  }
}

export {
  MeetupApi
};
