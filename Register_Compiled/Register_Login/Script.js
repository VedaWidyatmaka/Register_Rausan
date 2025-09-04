        document.getElementById("registerForm").addEventListener("submit", function(e) {
            e.preventDefault();

            const nama = document.getElementById("nama").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirmPassword").value;
            const nomor = document.getElementById("nomor").value;
            const tanggal = document.getElementById("tanggal").value;
            const gender = document.getElementById("gender").value;

            const errorMsg = document.getElementById("errorMsg");
            const successMsg = document.getElementById("successMsg");

            const user = {
                nama: nama,
                email: email,
                password: password,
                confirmPassword: confirmPassword,
                nomor: nomor,
                tanggal: tanggal,
                gender: gender,
                errorMsg: errorMsg,
                successMsg: successMsg
            };
            localStorage.setItem(email, JSON.stringify(user));

            alert("Mas Narji makan rendang");

            errorMsg.textContent = "";
            successMsg.textContent = "";

            if (password.length < 6) {
                errorMsg.textContent = "Password minimal 6 karakter.";
                return;
            }

            if (password !== confirmPassword) {
                errorMsg.textContent = "Konfirmasi password tidak cocok.";
                return;
            }

            const table = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
            const newRow = table.insertRow();

            newRow.insertCell(0).textContent = nama;
            newRow.insertCell(1).textContent = email;
            newRow.insertCell(2).textContent = nomor;
            newRow.insertCell(3).textContent = tanggal;
            newRow.insertCell(4).textContent = gender;

            document.getElementById("registerForm").reset();
            successMsg.textContent = "Registrasi berhasil!";
        });
