// URL del API
const API_URL = "https://jsonplaceholder.typicode.com/users";

// Referencia al elemento del DOM
const userList = document.getElementById("user-list");

// Función para obtener datos
async function fetchUsers() {
    try {
        const response = await fetch(API_URL); // Realizamos la solicitud GET
        const users = await response.json(); // Convertimos la respuesta a JSON

        // Iteramos sobre los datos y los mostramos en el HTML
        users.forEach(user => {
            const listItem = document.createElement("li");
            listItem.textContent = `${user.name} (${user.email})`;
            userList.appendChild(listItem);
        });
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
}

// Llamamos a la función al cargar el script
fetchUsers();
