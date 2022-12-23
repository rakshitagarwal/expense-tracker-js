function saveToLocalStorage(event) {
    event.preventDefault();
    const Amount = event.target.Expense.value;
    const Breif = event.target.Description.value;
    const List = event.target.Category.value;
    const obj = {
      Amount,
      Breif,
      List,
    };
    localStorage.setItem(obj.Amount, JSON.stringify(obj));
    showNewUserOnScreen(obj);
  }
  window.addEventListener("DOMContentLoaded", () => {
    const localStorageObj = localStorage;
    const localstoragekeys = Object.keys(localStorageObj);
  
    for (var i = 0; i < localstoragekeys.length; i++) {
      const key = localstoragekeys[i];
      const userDetailsString = localStorageObj[key];
      const userDetailsObj = JSON.parse(userDetailsString);
      showNewUserOnScreen(userDetailsObj);
    }
  });
  
  function showNewUserOnScreen(User) {
    const parentNode = document.getElementById("onSubmit");
  
    const childHTML = `<li id=${User.Amount}>${User.Amount} - ${User.Breif} - ${User.List}
                      <button onClick=deleteUser('${User.Amount}')>Delete Expense</button>
                      <button onClick=editUserDetails('${User.Amount}','${User.Breif}','${User.List}')>Edit Expense</button>
                      </li>`;
  
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
  }
  
  function editUserDetails(Amount, Breif, List) {
    document.getElementById("Amount").value = Amount;
    document.getElementById("Description").value = Breif;
    document.getElementById("Category").value = List;
    deleteUser(Amount);
  }
  
  function deleteUser(Amount) {
    localStorage.removeItem(Amount);
    removeUserFromScreen(Amount);
  }
  
  function removeUserFromScreen(Amount) {
    const parentNode = document.getElementById("onSubmit");
    const childNodeToBeDeleted = document.getElementById(Amount);
    parentNode.removeChild(childNodeToBeDeleted);
  }
  