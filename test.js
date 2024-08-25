// const scopes = [
//   { name: 'list:admin', description: 'View all admins' },
//   { name: 'create:admin', description: 'Create new admin' },
//   { name: 'update:admin', description: 'Edit existing admin' },
//   { name: 'delete:admin', description: 'Remove admins' },
//   { name: 'view:invoice', description: 'View invoice details' },
//   { name: 'list:invoice', description: 'View all invoices' },
//   { name: 'create:invoice', description: 'Create new invoices' },
//   { name: 'update:invoice', description: 'Edit existing invoices' },
//   { name: 'delete:invoice', description: 'Remove invoices' },
//   { name: 'list:creator', description: 'View all creators' },
//   { name: 'view:creator', description: 'View creator profiles' },
//   { name: 'create:creator', description: 'Add new creators' },
//   { name: 'update:creator', description: 'Edit creator details' },
//   { name: 'delete:creator', description: 'Remove creators' },
//   { name: 'list:client', description: 'View client details' },
//   { name: 'view:client', description: 'View client profiles' },
//   { name: 'create:client', description: 'Add new clients' },
//   { name: 'update:client', description: 'Edit client details' },
//   { name: 'delete:client', description: 'Remove clients' },
//   { name: 'list:campaign', description: 'View all campaigns' },
//   { name: 'view:campaign', description: 'View campaign details' },
//   { name: 'create:campaign', description: 'Create new campaigns' },
//   { name: 'update:campaign', description: 'Edit existing campaigns' },
//   { name: 'delete:campaign', description: 'Remove campaigns' },
//   { name: 'list:metrics', description: 'View all metrics' },
//   { name: 'view:metrics', description: 'View metrics details' },
//   { name: 'create:metrics', description: 'Create new metrics' },
//   { name: 'update:metrics', description: 'Update existing metrics' },
//   { name: 'delete:metrics', description: 'Remove metrics' },
// ];

// const csmRoles = {
//   role: 'CSM',
//   permissions: ['view:campaign', 'create:campaign', 'update:campaign', 'delete:campaign', 'list:creator'],
// };

// const csmPermissions = csmRoles.permissions;
// const a = scopes.filter((item) => csmPermissions.includes(item.name));
// console.log(a);

const test_A = [
  { name: 'Afiq', id: 1 },
  { name: 'Danial', id: 2 },
  { name: 'bin', id: 3 },
  { name: 'Nooraza', id: 4 },
];

const test_B = [
  { job: 'Software Engineer', id: 1 },
  { job: 'Accountant', id: 2 },
  { job: 'Mobile App Developer', id: 3 },
];

const newArr = [];

for (const a of test_A) {
  for (const b of test_B) {
    if (!newArr.map((item) => item.job).includes(b.job)) {
      newArr.push({ job: b.job, workers: [] });
    }
    newArr.find((arr) => arr.job === b.job).workers.push(a.id);
  }
}

console.log(newArr);