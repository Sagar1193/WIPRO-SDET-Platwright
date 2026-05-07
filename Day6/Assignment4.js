const employees = [
  { id: 101, name: "Alice", salary: 6000 },
  { id: 102, name: "Bob", salary: 3500 },
  { id: 103, name: "Charlie", salary: 5200 }
];

// Callback Function
const taxLogic = (salary) => {
  return salary > 5000 ? 0.20 : 0.10;
};

function calculatePayroll(employees, taxCallback) {

  let totalNetPayout = 0;

  const processedEmployees = employees.map(emp => {

    const taxRate = taxCallback(emp.salary);

    const taxAmount = emp.salary * taxRate;

    const netSalary = emp.salary - taxAmount;

    totalNetPayout += netSalary;

    return {
      ...emp,
      tax: taxAmount,
      netSalary: Number(netSalary.toFixed(2)),
      status: netSalary > 4000 ? "Premium" : "Standard"
    };
  });

  console.log(
    `Payroll Processed: Total Net Payout is $${totalNetPayout.toFixed(2)} for ${employees.length} employees.`
  );

  // Simulate server delay
  setTimeout(() => {
    console.log(processedEmployees);
  }, 2000);
}

calculatePayroll(employees, taxLogic);