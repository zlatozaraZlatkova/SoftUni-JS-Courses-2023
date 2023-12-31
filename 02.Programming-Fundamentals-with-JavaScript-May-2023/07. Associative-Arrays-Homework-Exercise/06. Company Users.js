function companyUsers(data) {
  let companies = new Map();

  for (line of data) {
    let [name, id] = line.split(" -> ");
    if (!companies.has(name)) {
      companies.set(name, new Set());
    }
    companies.get(name).add(id);
  }
  let sortedCompanies = Array.from(companies).sort((a, b) =>
    a[0].localeCompare(b[0])
  );
  for (let [companyName, users] of sortedCompanies) {
    console.log(companyName);
    for (let id of Array.from(users)) {
      console.log(`-- ${id}`);
    }
  }
}
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> CC12344",
  "Lenovo -> XX23456",
  "SoftUni -> AA12345",
  "Movement -> DD11111",
]);

// Version with object
function companyUsers(data) {
  let companies = {};

  for (line of data) {
    let [name, id] = line.split(" -> ");

    if (!companies.hasOwnProperty(name)) {
      companies[name] = [];
    }

    companies[name].push(id);
  }
  let sortedCompanies = Object.entries(companies).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (let [companyName, users] of sortedCompanies) {
    console.log(companyName);
    let set = new Set(users);

    for (let id of set) {
      console.log(`-- ${id}`);
    }
  }
}

companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
