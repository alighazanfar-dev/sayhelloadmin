import moment from "moment";

const DataFunction = {
  getChartData(objects) {
    const cityCounts = {};
    for (const obj of objects) {
      if (cityCounts[obj.permanent_city]) {
        cityCounts[obj.permanent_city] += 1;
      } else {
        cityCounts[obj.permanent_city] = 1;
      }
    }

    const sortedCityCounts = Object.entries(cityCounts).sort(
      (a, b) => b[1] - a[1]
    );

    const topFiveCities = sortedCityCounts.slice(0, 5);

    const labels = topFiveCities.map(([city, count]) => city);
    const data = topFiveCities.map((cityCount) => cityCount[1]);

    let val = {
      series: data,
      options: {
        chart: {
          width: 380,
          type: "pie",
        },
        labels: labels,
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };

    return val;
  },
  getChartDataLoan(objects) {
    const cityCounts = {};
    for (const obj of objects) {
      if (cityCounts[obj.purpose_of_loan]) {
        cityCounts[obj.purpose_of_loan] += 1;
      } else {
        cityCounts[obj.purpose_of_loan] = 1;
      }
    }

    const sortedCityCounts = Object.entries(cityCounts).sort(
      (a, b) => b[1] - a[1]
    );
    const topFiveCities = sortedCityCounts.slice(0, 5);

    const labels = topFiveCities.map(([city, count]) => city);
    const data = topFiveCities.map((cityCount) => cityCount[1]);

    let val = {
      series: data,
      options: {
        chart: {
          width: 380,
          type: "pie",
        },
        labels: labels,
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
    return val;
  },
  getChartLast1Year(objects) {
    let array = [];
    let newArr = [];

    for (let i = 0; i < objects.length; i++) {
      const element = objects[i].createdAt.split("-")[1];
      array.push(element);
    }

    const unique = array
      .filter((item, index, self) => self.indexOf(item) === index)
      .sort();

    var cat = [];
    for (var y = 0; y < unique.length; y++) {
      if (unique[y] === "01") {
        cat.push("JAN");
      }
      if (unique[y] === "02") {
        cat.push("FEB");
      }
      if (unique[y] === "03") {
        cat.push("MAR");
      }
      if (unique[y] === "04") {
        cat.push("APR");
      }
      if (unique[y] === "05") {
        cat.push("MAY");
      }
      if (unique[y] === "06") {
        cat.push("JUN");
      }
      if (unique[y] === "07") {
        cat.push("JUL");
      }
      if (unique[y] === "08") {
        cat.push("AUG");
      }
      if (unique[y] === "09") {
        cat.push("SEP");
      }
      if (unique[y] === "10") {
        cat.push("OCT");
      }
      if (unique[y] === "11") {
        cat.push("NOV");
      }
      if (unique[y] === "12") {
        cat.push("DEC");
      }
    }

    for (let i = 0; i < unique.length; i++) {
      const element = unique[i];

      let filtering = objects.filter((els) =>
        els.createdAt.split("-")[1].includes(element)
      ).length;
      newArr.push(filtering);
    }

    let val = {
      series: [
        {
          data: newArr,
        },
        {
          labels: cat,
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "bar",
          events: {
            click: function (chart, w, e) {
              // console.log(chart, w, e)
            },
          },
        },
        plotOptions: {
          bar: {
            columnWidth: "45%",
            distributed: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        xaxis: {
          categories: cat,
          labels: {
            style: {
              fontSize: "12px",
            },
          },
        },
      },
    };

    return val;
  },
  getChartLast1YearTest(objects) {
    const cityCounts = {};
    for (const obj of objects) {
      const date = moment(obj.createdAt).format("MMM/YYYY");
      if (cityCounts[date]) {
        cityCounts[date] += 1;
      } else {
        cityCounts[date] = 1;
      }
    }

    const sortedCityCounts = Object.entries(cityCounts).sort((a, b) => {
      const aIndex = moment.localeData().months().indexOf(a);
      const bIndex = moment.localeData().months().indexOf(b);
      const rev = aIndex - bIndex;
      return rev;
    });

    const topFiveCities = sortedCityCounts.slice(0, 12);
    const labels = topFiveCities.map(([city, count]) => city).reverse();
    const data = topFiveCities.map((cityCount) => cityCount[1]).reverse();

    let val = {
      series: [
        {
          data: data,
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "bar",
          events: {
            click: function (chart, w, e) { },
          },
        },
        plotOptions: {
          bar: {
            columnWidth: "45%",
            distributed: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        xaxis: {
          categories: labels,
          labels: {
            style: {
              fontSize: "12px",
            },
          },
        },
      },
    };
    return val;
  },

  getChartLast1YearTest2(objects) {
    const pastTwelveMonthsData = objects.filter((item) => {
      const createdAt = moment(item.createdAt);
      const currentDate = moment();
      return createdAt.isSameOrAfter(currentDate.subtract(12, "months"));
    });
    const monthCounts = [];
    const currentMonth = moment().month();
    const currentYear = moment().year();

    for (let i = 0; i < 12; i++) {
      const month = (currentMonth + i) % 12;
      const year = month < currentMonth ? currentYear - 1 : currentYear;
      const monthData = pastTwelveMonthsData.filter((item) => {
        const createdAt = moment(item.createdAt);
        return createdAt.month() === month && createdAt.year() === year;
      });
      monthCounts.push({
        month: moment().month(month).format("MMM"),
        year: year,
        count: monthData.length,
      });
    }

    let val = {
      series: [
        {
          data: monthCounts.map((el) => el.count),
        },
        {
          label: monthCounts.map((el) => el.month),
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "bar",
          events: {
            click: function (chart, w, e) {
              // console.log(chart, w, e)
            },
          },
        },
        plotOptions: {
          bar: {
            columnWidth: "45%",
            distributed: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        xaxis: {
          categories: monthCounts.map((el) => el.month),
          labels: {
            style: {
              fontSize: "12px",
            },
          },
        },
      },
    };

    return val;
  },

  imageCheck(image) {
    const data = image;

    return (
      <>
        <img
          src={data}
          alt=""
          width={60}
          crossOrigin="anonymous"
          onError={(e) => (e.target.src = "/assets/images/noimage.jpg")}
          style={{
            objectFit: "cover",
            border: "solid 1px",
            borderColor: "#151b2685",
            borderRadius: "5px",
          }}
        />
      </>
    );
  }
};

export default DataFunction;
