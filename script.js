var myHeaders = new Headers();
myHeaders.append("Authorization", "Basic aHM6MXFhc3cyM2VkIQ==");

var requestOptions = {
 method: "GET",
 headers: myHeaders,
 redirect: "follow",
};

fetch(
 "https://web1c.standart.by/std_UT/hs/api/StandartsByType/1",
 requestOptions
)
 .then((response) => response.text())
 .then((result) => console.log(result))
 .catch((error) => console.log("error", error));
