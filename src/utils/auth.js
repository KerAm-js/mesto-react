export const BASE_URL = 'https://auth.nomoreparties.co';

export const reg = (email, password) => {
  console.log(email, password);
  return fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password,
      })
    })
      .then(res => {
        try {
          if (res.status.toString()[0] === '2' ) {
            return res.json();
          }
        } catch(e) {
          return e
        }
      })
      .then(res => {
        return res
      })
      .catch(e => {
        return e
      })
}

export const auth = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password,
      })
    })
      .then(res => {
        try {
          if (res.status.toString()[0] === '2' ) {
            return res.json()
          }
        } catch(e) {
          return e
        }
      })
      .then(res => {
        return res
      })
      .catch(e => {
        return e
      })
}

export const authWithJWT = (jwt) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${jwt}`
    }
  })
    .then(res => {
      try {
        if (res.status.toString()[0] === '2') {
          return res.json()
        }
      } catch (e) {
        return e
      }
    })
    .then(res => {
      return res
    })
    .catch(e => {
      return e
    })
}