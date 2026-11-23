// Small helpers for the homepage: greet the visitor, list their recent orders,
// and save their display preferences.

// Show "Hello, <name>" using the ?name= query parameter.
function greetVisitor() {
  const params = new URLSearchParams(window.location.search);
  const name = params.get("name");
  document.getElementById("greeting").innerHTML = "Hello, " + name + "!";
}

// Return the total price of the visitor's orders.
function orderTotal(orders) {
  let total = 0;
  for (let i = 0; i < orders.length; i++) {
    total += orders[i].price * orders[i].quantity;
  }
  return total;
}

// Save preferences, then tell the user it worked.
async function savePreferences(prefs) {
  fetch("/api/preferences", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(prefs),
  });
  showToast("Preferences saved");
}

function showToast(message) {
  const el = document.getElementById("toast");
  el.textContent = message;
  el.style.display = "block";
}

window.addEventListener("DOMContentLoaded", greetVisitor);

//test 21 hello
//sdwdw
//123
//12221
