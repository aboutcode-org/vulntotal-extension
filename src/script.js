document.addEventListener("DOMContentLoaded", function () {
  // Simulate Environment Preparation
  const progressBar = document.getElementById("extension-loading");
  progressBar.value = 0;
  const interval = setInterval(() => {
    progressBar.value += 20;
    if (progressBar.value >= 100) {
      hideLoadingDiv();
      showHeroDiv();
      clearInterval(interval);
    }
  }, 1000);

  const sendButton = document.getElementById("submit_vuln");
  sendButton.addEventListener("click", async function () {
    showSearchButtonLoading();
    clearTable();
    const interval = setInterval(() => {
      let vulntotal_results = {
        deps: [
          {
            purl: "pkg:pypi/jinja2",
            affected_versions: [
              "2.0.0",
              "2.0.0rc1",
              "2.0rc1-py2.4-linux-i686",
              "2.0rc1-py2.4-linux-x86_64",
              "2.0rc1-py2.4-macosx-10.3-i386",
              "2.0rc1-py2.4-win32",
              "2.0rc1-py2.5-linux-i686",
              "2.0rc1-py2.5-linux-x86_64",
              "2.0rc1-py2.5-macosx-10.3-i386",
              "2.0rc1-py2.5-win32",
              "2.1-py2.4-win32",
              "2.1-py2.5-win32",
              "2.1-py2.6-win32",
              "2.1.0",
              "2.1.1",
              "2.1.1-py2.4-win32",
              "2.1.1-py2.5-win32",
              "2.1.1-py2.6-win32",
              "2.10.0",
              "2.2.0",
              "2.2.1",
              "2.3.0",
              "2.3.1",
              "2.4.0",
              "2.4.1",
              "2.5.0",
              "2.5.1",
              "2.5.2",
              "2.5.3",
              "2.5.4",
              "2.5.5",
              "2.6.0",
              "2.7.0",
              "2.7.1",
              "2.7.2",
              "2.7.3",
              "2.8.0",
              "2.8.1",
              "2.9.0",
              "2.9.1",
              "2.9.2",
              "2.9.3",
              "2.9.4",
              "2.9.5",
              "2.9.6",
            ],
            fixed_versions: [
              "2.10.1",
              "2.10.2",
              "2.10.3",
              "2.11.0",
              "2.11.1",
              "2.11.2",
              "2.11.3",
              "3.0.0",
              "3.0.0a1",
              "3.0.0rc1",
              "3.0.0rc2",
              "3.0.1",
              "3.0.2",
              "3.0.3",
              "3.1.0",
              "3.1.1",
              "3.1.2",
              "3.1.3",
              "3.1.4",
            ],
            aliases: ["CVE-2019-10906", "PYSEC-2019-217"],
          },
        ],
        safetydb: [
          {
            purl: "pkg:pypi/jinja2",
            affected_versions: ["<2.11.3"],
            fixed_versions: [],
            aliases: ["CVE-2020-28493", "pyup.io-39525"],
          },
          {
            purl: "pkg:pypi/jinja2",
            affected_versions: ["<2.7.2"],
            fixed_versions: [],
            aliases: ["CVE-2014-1402", "pyup.io-25866"],
          },
          {
            purl: "pkg:pypi/jinja2",
            affected_versions: ["<2.8.1"],
            fixed_versions: [],
            aliases: ["CVE-2016-10745", "pyup.io-47572"],
          },
          {
            purl: "pkg:pypi/jinja2",
            affected_versions: ["<3.1.3"],
            fixed_versions: [],
            aliases: ["CVE-2024-22195", "pyup.io-64227"],
          },
          {
            purl: "pkg:pypi/jinja2",
            affected_versions: [">=0"],
            fixed_versions: [],
            aliases: ["CVE-2019-8341", "pyup.io-70612"],
          },
          {
            purl: "pkg:pypi/jinja2",
            affected_versions: [">=0,<2.10.1"],
            fixed_versions: [],
            aliases: ["CVE-2019-10906", "pyup.io-54679"],
          },
          {
            purl: "pkg:pypi/jinja2",
            affected_versions: [">=0,<2.7.3"],
            fixed_versions: [],
            aliases: ["CVE-2014-0012", "pyup.io-54674"],
          },
        ],
        oss_index: [
          {
            purl: "pkg:pypi/jinja2",
            affected_versions: [],
            fixed_versions: [],
            aliases: ["CVE-2014-1402"],
          },
          {
            purl: "pkg:pypi/jinja2",
            affected_versions: [],
            fixed_versions: [],
            aliases: ["CVE-2016-10745"],
          },
          {
            purl: "pkg:pypi/jinja2",
            affected_versions: [],
            fixed_versions: [],
            aliases: ["CVE-2020-28493"],
          },
          {
            purl: "pkg:pypi/jinja2",
            affected_versions: [],
            fixed_versions: [],
            aliases: ["CVE-2024-22195"],
          },
        ],
        osv: [
          {
            purl: "pkg:pypi/jinja2",
            affected_versions: [
              "0",
              "2.0",
              "2.0rc1",
              "2.1",
              "2.1.1",
              "2.10",
              "2.2",
              "2.2.1",
              "2.3",
              "2.3.1",
              "2.4",
              "2.4.1",
              "2.5",
              "2.5.1",
              "2.5.2",
              "2.5.3",
              "2.5.4",
              "2.5.5",
              "2.6",
              "2.7",
              "2.7.1",
              "2.7.2",
              "2.7.3",
              "2.8",
              "2.8.1",
              "2.9",
              "2.9.1",
              "2.9.2",
              "2.9.3",
              "2.9.4",
              "2.9.5",
              "2.9.6",
            ],
            fixed_versions: ["2.10.1"],
            aliases: [
              "CVE-2019-10906",
              "GHSA-462w-v97r-4m45",
              "PYSEC-2019-217",
            ],
          },
          {
            purl: "pkg:pypi/jinja2",
            affected_versions: [
              "0",
              "2.0",
              "2.0rc1",
              "2.1",
              "2.1.1",
              "2.2",
              "2.2.1",
              "2.3",
              "2.3.1",
              "2.4",
              "2.4.1",
              "2.5",
              "2.5.1",
              "2.5.2",
              "2.5.3",
              "2.5.4",
              "2.5.5",
              "2.6",
              "2.7",
              "2.7.1",
            ],
            fixed_versions: ["2.7.2"],
            aliases: ["CVE-2014-1402", "GHSA-8r7q-cvjq-x353", "PYSEC-2014-8"],
          },
          {
            purl: "pkg:pypi/jinja2",
            affected_versions: [
              "0",
              "2.0",
              "2.0rc1",
              "2.1",
              "2.1.1",
              "2.2",
              "2.2.1",
              "2.3",
              "2.3.1",
              "2.4",
              "2.4.1",
              "2.5",
              "2.5.1",
              "2.5.2",
              "2.5.3",
              "2.5.4",
              "2.5.5",
              "2.6",
              "2.7",
              "2.7.1",
            ],
            fixed_versions: ["2.7.2"],
            aliases: ["CVE-2014-0012", "GHSA-fqh9-2qgg-h84h", "PYSEC-2014-82"],
          },
          {
            purl: "pkg:pypi/jinja2",
            affected_versions: [
              "0",
              "2.0",
              "2.0rc1",
              "2.1",
              "2.1.1",
              "2.10",
              "2.10.1",
              "2.10.2",
              "2.10.3",
              "2.11.0",
              "2.11.1",
              "2.11.2",
              "2.2",
              "2.2.1",
              "2.3",
              "2.3.1",
              "2.4",
              "2.4.1",
              "2.5",
              "2.5.1",
              "2.5.2",
              "2.5.3",
              "2.5.4",
              "2.5.5",
              "2.6",
              "2.7",
              "2.7.1",
              "2.7.2",
              "2.7.3",
              "2.8",
              "2.8.1",
              "2.9",
              "2.9.1",
              "2.9.2",
              "2.9.3",
              "2.9.4",
              "2.9.5",
              "2.9.6",
            ],
            fixed_versions: ["2.11.3"],
            aliases: [
              "CVE-2020-28493",
              "GHSA-g3rq-g295-4j3m",
              "PYSEC-2021-66",
              "SNYK-PYTHON-JINJA2-1012994",
            ],
          },
          {
            purl: "pkg:pypi/jinja2",
            affected_versions: [
              "0",
              "2.0",
              "2.0rc1",
              "2.1",
              "2.1.1",
              "2.10",
              "2.10.1",
              "2.10.2",
              "2.10.3",
              "2.11.0",
              "2.11.1",
              "2.11.2",
              "2.11.3",
              "2.2",
              "2.2.1",
              "2.3",
              "2.3.1",
              "2.4",
              "2.4.1",
              "2.5",
              "2.5.1",
              "2.5.2",
              "2.5.3",
              "2.5.4",
              "2.5.5",
              "2.6",
              "2.7",
              "2.7.1",
              "2.7.2",
              "2.7.3",
              "2.8",
              "2.8.1",
              "2.9",
              "2.9.1",
              "2.9.2",
              "2.9.3",
              "2.9.4",
              "2.9.5",
              "2.9.6",
              "3.0.0",
              "3.0.0a1",
              "3.0.0rc1",
              "3.0.0rc2",
              "3.0.1",
              "3.0.2",
              "3.0.3",
              "3.1.0",
              "3.1.1",
              "3.1.2",
            ],
            fixed_versions: ["3.1.3"],
            aliases: ["CVE-2024-22195", "GHSA-h5c8-rqwp-cp95"],
          },
          {
            purl: "pkg:pypi/jinja2",
            affected_versions: [
              "0",
              "2.0",
              "2.0rc1",
              "2.1",
              "2.1.1",
              "2.10",
              "2.10.1",
              "2.10.2",
              "2.10.3",
              "2.11.0",
              "2.11.1",
              "2.11.2",
              "2.11.3",
              "2.2",
              "2.2.1",
              "2.3",
              "2.3.1",
              "2.4",
              "2.4.1",
              "2.5",
              "2.5.1",
              "2.5.2",
              "2.5.3",
              "2.5.4",
              "2.5.5",
              "2.6",
              "2.7",
              "2.7.1",
              "2.7.2",
              "2.7.3",
              "2.8",
              "2.8.1",
              "2.9",
              "2.9.1",
              "2.9.2",
              "2.9.3",
              "2.9.4",
              "2.9.5",
              "2.9.6",
              "3.0.0",
              "3.0.0a1",
              "3.0.0rc1",
              "3.0.0rc2",
              "3.0.1",
              "3.0.2",
              "3.0.3",
              "3.1.0",
              "3.1.1",
              "3.1.2",
              "3.1.3",
            ],
            fixed_versions: ["3.1.4"],
            aliases: ["CVE-2024-34064", "GHSA-h75v-3vvj-5mfj"],
          },
          {
            purl: "pkg:pypi/jinja2",
            affected_versions: [
              "0",
              "2.0",
              "2.0rc1",
              "2.1",
              "2.1.1",
              "2.2",
              "2.2.1",
              "2.3",
              "2.3.1",
              "2.4",
              "2.4.1",
              "2.5",
              "2.5.1",
              "2.5.2",
              "2.5.3",
              "2.5.4",
              "2.5.5",
              "2.6",
              "2.7",
              "2.7.1",
              "2.7.2",
              "2.7.3",
              "2.8",
            ],
            fixed_versions: ["2.8.1"],
            aliases: [
              "CVE-2016-10745",
              "GHSA-hj2j-77xm-mc5v",
              "PYSEC-2019-220",
            ],
          },
          {
            purl: "pkg:pypi/jinja2",
            affected_versions: [
              "0",
              "2.0",
              "2.0rc1",
              "2.1",
              "2.1.1",
              "2.2",
              "2.2.1",
              "2.3",
              "2.3.1",
              "2.4",
              "2.4.1",
              "2.5",
              "2.5.1",
              "2.5.2",
              "2.5.3",
              "2.5.4",
              "2.5.5",
              "2.6",
              "2.7",
              "2.7.1",
            ],
            fixed_versions: ["2.7.2"],
            aliases: ["CVE-2014-1402", "GHSA-8r7q-cvjq-x353", "PYSEC-2014-8"],
          },
          {
            purl: "pkg:pypi/jinja2",
            affected_versions: [
              "0",
              "2.0",
              "2.0rc1",
              "2.1",
              "2.1.1",
              "2.2",
              "2.2.1",
              "2.3",
              "2.3.1",
              "2.4",
              "2.4.1",
              "2.5",
              "2.5.1",
              "2.5.2",
              "2.5.3",
              "2.5.4",
              "2.5.5",
              "2.6",
              "2.7",
              "2.7.1",
              "2.7.2",
            ],
            fixed_versions: ["acb672b6a179567632e032f547582f30fa2f4aa7"],
            aliases: ["CVE-2014-0012", "GHSA-fqh9-2qgg-h84h", "PYSEC-2014-82"],
          },
          {
            purl: "pkg:pypi/jinja2",
            affected_versions: [
              "0",
              "2.0",
              "2.0rc1",
              "2.1",
              "2.1.1",
              "2.10",
              "2.2",
              "2.2.1",
              "2.3",
              "2.3.1",
              "2.4",
              "2.4.1",
              "2.5",
              "2.5.1",
              "2.5.2",
              "2.5.3",
              "2.5.4",
              "2.5.5",
              "2.6",
              "2.7",
              "2.7.1",
              "2.7.2",
              "2.7.3",
              "2.8",
              "2.8.1",
              "2.9",
              "2.9.1",
              "2.9.2",
              "2.9.3",
              "2.9.4",
              "2.9.5",
              "2.9.6",
            ],
            fixed_versions: ["2.10.1"],
            aliases: [
              "CVE-2019-10906",
              "GHSA-462w-v97r-4m45",
              "PYSEC-2019-217",
            ],
          },
          {
            purl: "pkg:pypi/jinja2",
            affected_versions: [
              "0",
              "2.0",
              "2.0rc1",
              "2.1",
              "2.1.1",
              "2.2",
              "2.2.1",
              "2.3",
              "2.3.1",
              "2.4",
              "2.4.1",
              "2.5",
              "2.5.1",
              "2.5.2",
              "2.5.3",
              "2.5.4",
              "2.5.5",
              "2.6",
              "2.7",
              "2.7.1",
              "2.7.2",
              "2.7.3",
              "2.8",
            ],
            fixed_versions: ["9b53045c34e61013dc8f09b7e52a555fa16bed16"],
            aliases: [
              "CVE-2016-10745",
              "GHSA-hj2j-77xm-mc5v",
              "PYSEC-2019-220",
            ],
          },
          {
            purl: "pkg:pypi/jinja2",
            affected_versions: [
              "0",
              "2.0",
              "2.0rc1",
              "2.1",
              "2.1.1",
              "2.10",
              "2.10.1",
              "2.10.2",
              "2.10.3",
              "2.11.0",
              "2.11.1",
              "2.11.2",
              "2.2",
              "2.2.1",
              "2.3",
              "2.3.1",
              "2.4",
              "2.4.1",
              "2.5",
              "2.5.1",
              "2.5.2",
              "2.5.3",
              "2.5.4",
              "2.5.5",
              "2.6",
              "2.7",
              "2.7.1",
              "2.7.2",
              "2.7.3",
              "2.8",
              "2.8.1",
              "2.9",
              "2.9.1",
              "2.9.2",
              "2.9.3",
              "2.9.4",
              "2.9.5",
              "2.9.6",
            ],
            fixed_versions: ["2.11.3"],
            aliases: [
              "CVE-2020-28493",
              "GHSA-g3rq-g295-4j3m",
              "PYSEC-2021-66",
              "SNYK-PYTHON-JINJA2-1012994",
            ],
          },
        ],
        snyk: [
          {
            purl: "pkg:pypi/jinja2",
            affected_versions: ["[,2.11.3)"],
            fixed_versions: ["2.11.3"],
            aliases: ["CVE-2020-28493", "SNYK-PYTHON-JINJA2-1012994"],
          },
          {
            purl: "pkg:pypi/jinja2",
            affected_versions: ["[,2.10.1)"],
            fixed_versions: ["2.10.1"],
            aliases: ["CVE-2019-10906", "SNYK-PYTHON-JINJA2-174126"],
          },
          {
            purl: "pkg:pypi/jinja2",
            affected_versions: ["[,2.7.2)"],
            fixed_versions: ["2.7.2"],
            aliases: ["CVE-2014-0012", "SNYK-PYTHON-JINJA2-40250"],
          },
          {
            purl: "pkg:pypi/jinja2",
            affected_versions: ["[,2.7.2)"],
            fixed_versions: ["2.7.2"],
            aliases: ["CVE-2014-1402", "SNYK-PYTHON-JINJA2-40028"],
          },
        ],
      };
      // Show the table if it was hidden
      showResultsTable();
      // Hide hero div if it was visible
      hideHeroDiv();
      // Hide Search Button loading animation
      hideSearchButtonLoading();
      // Populate the table with the results
      newDataSourceResult("deps", vulntotal_results.deps);
      newDataSourceResult("safetydb", vulntotal_results.safetydb);
      newDataSourceResult("oss_index", vulntotal_results.oss_index);
      newDataSourceResult("osv", vulntotal_results.osv);
      newDataSourceResult("snyk", vulntotal_results.snyk);

      clearInterval(interval);
    }, 2000);
  });

  function newDataSourceResult(source, results) {
    results.forEach((row) => {
      let rowHtml = `
      <tr>
        <td>${row.aliases[0]}</td>
        <td>${source}</td>
        <td>${row.aliases}</td>
        <td>${row.affected_versions}</td>
        <td>${row.fixed_versions}</td>
      </tr>
      `;
      var tableRef = document
        .getElementById(`results-table`)
        .getElementsByTagName("tbody")[0];

      var newRow = tableRef.insertRow(tableRef.rows.length);
      newRow.innerHTML = rowHtml;
    });
  }

  const navBarBurger = document.getElementById("nav-burger");
  navBarBurger.addEventListener("click", () => {
    document.getElementById("navMenu").classList.toggle("is-active");
  });

  const settingsButton = document.getElementById("settings-button");
  settingsButton.addEventListener("click", async function () {
    let queryOptions = { active: true };
    chrome.tabs.query(queryOptions, ([tab]) => {
      if (tab.title === "VulnTotal Home") {
        chrome.tabs.update({ url: "settings.html" });
      } else {
        chrome.tabs.create({ url: "settings.html" });
      }
    });
  });

  const fullscreenButton = document.getElementById("fullscreen-button");
  fullscreenButton.addEventListener("click", async function () {
    chrome.tabs.create({ url: "popup.html" });
  });

  const refreshButton = document.getElementById("refresh-button");
  refreshButton.addEventListener("click", async function () {
    clearTable();
    hideResultsTable();
    showHeroDiv();
  });
});

const clearTable = () => {
  var tableRef = document
    .getElementById(`results-table`)
    .getElementsByTagName("tbody")[0];
  tableRef.innerHTML = "";
};

const hideResultsTable = () => {
  const tableDiv = document.getElementById("table-div");
  tableDiv.classList.add("is-hidden");
};

const showResultsTable = () => {
  const tableDiv = document.getElementById("table-div");
  tableDiv.classList.remove("is-hidden");
};

const hideLoadingDiv = () => {
  const progressDiv = document.getElementById("loading-div");
  progressDiv.classList.add("is-hidden");
};

const showSearchButtonLoading = () => {
  const sendButton = document.getElementById("submit_vuln");
  sendButton.classList.add("is-loading");
};

const hideSearchButtonLoading = () => {
  const sendButton = document.getElementById("submit_vuln");
  sendButton.classList.remove("is-loading");
};

const hideHeroDiv = () => {
  const heroDiv = document.getElementById("hero-div");
  heroDiv.classList.add("is-hidden");
};

const showHeroDiv = () => {
  const heroDiv = document.getElementById("hero-div");
  heroDiv.classList.remove("is-hidden");
};
