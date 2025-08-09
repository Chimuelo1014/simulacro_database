const API_URL = "http://localhost:3000/medicos";
const form = document.getElementById("medicosForm");
const table = document.getElementById("medicosTabla");
const medicoId = document.getElementById("medicosId");

async function cargarMedicos() {
    const res = await fetch(API_URL);
    const data = await res.json();
    table.innerHTML = "";
    data.forEach(c => {
        table.innerHTML += `
            <tr>
                <td>${c.id_medico}</td>
                <td>${c.nombre_medico}</td>
                <td>
                    <button onclick="editarCliente(${c.id_medico}, '${c.nombre_medico}')">Editar</button>
                    <button onclick="eliminarCliente(${c.id_cliente})">Eliminar</button>
                </td>
            </tr>
        `;
    });
}

form.addEventListener("submit", async e => {
    e.preventDefault();
    const medico = {
        nombre: document.getElementById("nombre").value,
        email: document.getElementById("email").value,
        telefono: document.getElementById("telefono").value
    };

    if (clienteId.value) {
        await fetch(`${API_URL}/${clienteId.value}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cliente)
        });
    } else {
        await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cliente)
        });
    }
    form.reset();
    clienteId.value = "";
    cargarClientes();
});

function editarCliente(id, nombre, email, telefono) {
    clienteId.value = id;
    document.getElementById("nombre").value = nombre;
    document.getElementById("email").value = email;
    document.getElementById("telefono").value = telefono;
}

async function eliminarCliente(id) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    cargarClientes();
}

cargarClientes();
