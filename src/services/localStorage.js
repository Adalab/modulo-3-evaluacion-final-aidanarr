
// Función para obtener el Local Storage. Recibe dos parámetros, la key del LS y el valor por defecto que tiene que usar en caso de que LS esté vacío

const get = (key, defaultValue) => {
    const localStorageData = localStorage.getItem(key);
    if (localStorageData === null) {
      return defaultValue;
    } else {
      return JSON.parse(localStorageData);
    }
  };
  
  // Guardamos el array del fetch en LS
const set = (key, value) => {
    const localStorageData = JSON.stringify(value);
    localStorage.setItem(key, localStorageData);
  };

  