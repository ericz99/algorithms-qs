/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  let result = [];

  for (const email of emails) {
    let pos = email.indexOf("@");
    let local = email.substring(0, pos);
    let domain = email.substring(pos);

    if (local.includes(".")) {
      local = local.replace(/[.]/g, "");
    }

    if (local.includes("+")) {
      local = local.substring(0, local.indexOf("+"));
    }

    local += domain;

    if (!result.includes(domain)) {
      result.push(local);
    }
  }

  return [...new Set(result)].length;
};

console.log(
  numUniqueEmails([
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com",
    "testemail+aaron.zhang@lee.tco.de.com",
    "carry+aaron.zhang@lee.tco.de.com"
  ])
);
