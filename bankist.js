// alert('this is');
('use strict');

const account1 = {
  owners: 'Sujan Khadka',
  address: 'itahari-20',
  myMoney: [300, 55011, -490, 11150, -300, 311000, -200, -21150],
  interestRate: 1.5,
  job: 'Mafia',
  password: 1111,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2021-10-02T17:01:17.194Z',
    '2021-10-05T23:36:17.929Z',
    '2021-10-07T10:51:36.790Z',
  ],
  locale: 'en-US',
  currency: 'USD',
};
const account2 = {
  owners: 'Arjun',
  address: 'tarahara-1',
  myMoney: [512, -615, 21145, 111, -10112, 22, -5115, 785],
  interestRate: 1.3,
  job: 'pimp',
  password: 2222,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  locale: 'pt-PT',
  currency: 'EUR',
};
const account3 = {
  owners: 'Yuwash Bantawa Rai',
  address: 'hansposha-2',
  myMoney: [-624, 25, 3010, -85, 2155, 422, -1300, 7152],
  interestRate: 1,
  job: 'Drug Diller',
  password: 3333,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-07-26T17:01:17.194Z',
    '2020-07-28T23:36:17.929Z',
    '2020-08-01T10:51:36.790Z',
  ],
  locale: 'en-US',
  currency: 'USD',
};
const account4 = {
  owners: 'Prashant Nepal',
  address: 'homes-5',
  myMoney: [352, 26645, 1452, -10110, 952, -132, 5000, 25],
  interestRate: 0.7,
  job: 'Nepal Police',
  password: 4444,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  locale: 'pt-PT',
  currency: 'EUR',
};

const accounts = [account1, account2, account3, account4];

//////============///////
//----Selecting Items----
//////============///////
const loginGreetText = document.querySelector('.login-greet-text');

const loginUsername = document.querySelector('.login-userName');
const loginPassport = document.querySelector('.login-passport');
const loginBtnSubmit = document.querySelector('.login-btn-submit');

const headCurrentDate = document.querySelector('.head-current-date');
const headTotalAmt = document.querySelector('.head-total-amt');

// movements
const container = document.querySelector('.container');
const containerBody = document.querySelector('.container-body');
const movements = document.querySelector('.movements');

// movement deposit
const movementDepositName = document.querySelector('.movement-diposit-name');
const movementDepositDate = document.querySelector('.movement-diposit-date');
const movementDepositAmt = document.querySelector('.movement-diposit-amt');
// movement withdrawal
const movementWithdrawalName = document.querySelector(
  '.movement-withdrawl-name'
);
const movementWithdrawalDate = document.querySelector(
  '.movement-withdrawl-date'
);

const movementDate = document.querySelector('.movement-date');

const movementWithdrawalAmt = document.querySelector('.movement-withdrawl-amt');

// input Transfer Money
const inputTransferUserId = document.querySelector('.input-transfer-userId');
const inputTransferAmt = document.querySelector('.input-transfer-amt');
const inputTransferSubmit = document.querySelector(
  '.input-transfer-submitBTNs'
);

//  input Request money
const inputRequestAmt = document.querySelector('.input-request-amt');
const inputRequestsubmitBTN = document.querySelector(
  '.input-request-submitBTN'
);

// input Close Money
const inputCloseUserId = document.querySelector('.input-close-userId');
const inputCloseAmt = document.querySelector('.input-close-amt');
const inputCloseSubmitBTN = document.querySelector('.input-close-submitBTN');

// footer
const inAmount = document.querySelector('.footer-in-amt');
const outAmount = document.querySelector('.footer-out-amt');
const interestAmount = document.querySelector('.footer-interest-amt');
const timeOut = document.querySelector('.time-out');
const sort = document.querySelector('.sort');

// Creating UserName
const createUsernames = function (accs) {
  accs.forEach(element => {
    element.username = element.owners
      .toLowerCase()
      .split(' ')
      .map(function (item) {
        return item[0];
      })
      .join('');
  });
};
createUsernames(accounts);

// calculate days passed
const calcDatePassd = (currentDate, madeDate2) => {
  const countDay = Math.round(
    Math.abs(madeDate2 - currentDate) / (1000 * 60 * 60 * 24)
  );

  if (countDay === 0) return 'Today';
  if (countDay === 1) return 'Yesterday';
  if (countDay <= 7) return `${countDay} days ago`;

  // const day = `${madeDate2.getDate()}`.padStart(2, 0);
  // const month = `${madeDate2.getMonth() + 1}`.padStart(2, 0);
  // const year = madeDate2.getFullYear();

  // return `${day}/${month}/${year}`;

  const option = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  };
  return new Intl.DateTimeFormat(currentAccount.locale, option).format(
    madeDate2
  );
};

// defining formateMoney for  locale and currency
const formateMoney = function (value, locale, currency) {
  const option = {
    style: 'currency',
    currency: currency,
  };
  return new Intl.NumberFormat(locale, option).format(value.toFixed(2));
};

//displaying movements
const displayMovements = function (acc, sort = false) {
  movements.textContent = '';

  // sorting movements to ascending order
  const movs = sort ? acc.myMoney.slice().sort((a, b) => a - b) : acc.myMoney;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'diposit' : 'withdrawl';

    const dates = new Date(acc.movementsDates[i]);

    // calling and storing calcDatePassed
    const displayDates = calcDatePassd(new Date(), dates);

    // calling and storing formateMoney
    const displayMoney = formateMoney(mov, acc.locale, acc.currency);

    const html = `<div class="movement-type-diposit">
    <div class="movement-${type}-name"><span class="diposit" >${
      i + 1
    } ${type}</span></div>
    <div class="movement-diposite-date">${displayDates}</div>
    <div class="movement-${type}-amt">${displayMoney} </div>
  </div>`;

    movements.insertAdjacentHTML('afterbegin', html);
  });
};

// click on sort button for sorting
let sorted = false;
sort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

// display totoal balance
const displayTotalBalance = function (acc) {
  const balance = acc.myMoney.reduce(function (acc, arr) {
    return acc + arr;
  });
  acc.balance = balance;

  // calling and storing formateMoney
  const displays = formateMoney(acc.balance, acc.locale, acc.currency);

  headTotalAmt.textContent = `${displays}`;
};

// display money In Out Interest amt
const displayDipositInOutIntAmt = function (movs) {
  // Money In
  const moneyIn = movs.myMoney
    .filter(money => money > 0)
    .reduce((acu, acc) => acu + acc, 0);
  const displayMoneyIn = formateMoney(moneyIn, movs.locale, movs.currency);
  inAmount.textContent = `${displayMoneyIn} `;

  // Money Out
  const moneyOut = movs.myMoney
    .filter(moneyouts => moneyouts < 0)
    .reduce((moneyAuc, MoneyAcc) => moneyAuc + MoneyAcc, 0);
  const displayMoneyOut = formateMoney(
    Math.abs(moneyOut),
    movs.locale,
    movs.currency
  );
  outAmount.textContent = `${displayMoneyOut}`;

  // Interest Amount
  const interestDiposit = movs.myMoney
    .filter(int => int > 0)
    .map(intMoney => intMoney * account1.interestRate)
    .reduce((intReduce, money) => intReduce + money, 0);
  const displayInterestDeposit = formateMoney(
    interestDiposit,
    movs.locale,
    movs.currency
  );
  interestAmount.textContent = `${displayInterestDeposit} `;
};

// creating function to display ui
const displayUi = function (acc) {
  // display total balance
  displayTotalBalance(acc);

  // display movements
  displayMovements(acc);

  // display in, out & interest
  displayDipositInOutIntAmt(acc);
};

// Inplementing LogIn
let currentAccount;
loginBtnSubmit.addEventListener('click', function (e) {
  e.preventDefault();

  // matching user name
  currentAccount = accounts.find(
    accs => accs.username === loginUsername.value.toLowerCase()
  );
  // when pw and pin in correct
  if (currentAccount?.password === +loginPassport.value) {
    loginGreetText.textContent = `Wellcome Back, ${
      currentAccount.owners.split(' ')[0]
    }`;

    // display current date

    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    };

    headCurrentDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // const now = new Date();
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hours = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);

    // headCurrentDate.textContent = `${day}/${month}/${year}, ${hours}:${min}`;

    // clear input field
    loginUsername.value = loginPassport.value = '';

    // displaying data when loged in
    container.style.opacity = 100;

    // Update User Interface
    displayUi(currentAccount);
  }
});

// Transfer Money
inputTransferSubmit.addEventListener('click', function (e) {
  e.preventDefault();

  // find receiver user
  receivers = accounts.find(acc => acc.username === inputTransferUserId.value);
  const transferAmt = +inputTransferAmt.value;

  // clear input field
  inputTransferUserId.value = inputTransferAmt.value = '';

  if (
    transferAmt > 0 &&
    receivers &&
    currentAccount?.balance > transferAmt &&
    receivers.username !== currentAccount.username
  ) {
    // transfering money
    currentAccount.myMoney.push(-transferAmt);
    receivers.myMoney.push(transferAmt);

    // add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receivers.movementsDates.push(new Date().toISOString());

    // Update User Interface
    displayUi(currentAccount);
  } else {
    alert('Wrong Entry');
  }
});

// Request Amt
inputRequestsubmitBTN.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputRequestAmt.value;

  if (amount > 0 && currentAccount.myMoney.some(mov => mov >= amount / 10)) {
    setTimeout(function () {
      // adding the request amount
      currentAccount.myMoney.push(amount);

      // // add request date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Display UI
      displayUi(currentAccount);
    }, 2500);
  } else if (amount < 0) {
    alert('Request is too low');
  } else {
    alert('Request is too high');
  }

  // Clear input field
  inputRequestAmt.value = '';
});

// Close Account
inputCloseSubmitBTN.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUserId.value === currentAccount.username &&
    +inputCloseAmt.value === currentAccount.password
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    // Deleting currentAccount
    accounts.splice(index, 1);

    // hiding UI
    container.style.opacity = 0;
    console.log('right');
  } else {
    alert('Wrong Entry');
  }
  // clear input field
  inputCloseAmt.value = inputCloseUserId.value = '';
});

setTimeout(logoutTime, 30000);
function logoutTime() {
  // console.log('this is logout time');
}
