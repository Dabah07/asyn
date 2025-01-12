// Task 01: Async Iterator with Delays
async function iterateWithDelay(values) {
  for (const value of values) {
      console.log(value);
      await new Promise(resolve => setTimeout(resolve, 1000));
  }
}

// Task 02: Simulating API Call
async function fetchDataFromAPI() {
  const fakeAPIResponse = new Promise((resolve) => {
      setTimeout(() => resolve({ data: "Sample API Data" }), 1500);
  });
  const data = await fakeAPIResponse;
  console.log("Fetched Data:", data);
}

// Task 03: Error Handling with Async/Await
async function fetchDataWithErrorHandling() {
  try {
      const fakeAPIResponse = new Promise((resolve, reject) => {
          setTimeout(() => reject(new Error("API Error")), 1500);
      });
      const data = await fakeAPIResponse;
      console.log("Fetched Data:", data);
  } catch (error) {
      console.error("An error occurred: ", error.message);
  }
}

// Task 04: Chaining Async Functions
async function asyncFunction1() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log("Function 1 completed");
}

async function asyncFunction2() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log("Function 2 completed");
}

async function asyncFunction3() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log("Function 3 completed");
}

async function chainedAsyncFunctions() {
  await asyncFunction1();
  await asyncFunction2();
  await asyncFunction3();
}

// Task 05: Concurrent Requests with Promise.all
async function concurrentRequests() {
  const fakeAPI1 = new Promise(resolve => setTimeout(() => resolve("Response from API 1"), 2000));
  const fakeAPI2 = new Promise(resolve => setTimeout(() => resolve("Response from API 2"), 1000));

  const results = await Promise.all([fakeAPI1, fakeAPI2]);
  console.log("Concurrent Requests Results:", results);
}

// Task 06: Parallel API Calls
async function parallelRequests(urls) {
  const fetchPromises = urls.map(url => {
      return new Promise(resolve => {
          setTimeout(() => resolve(`Fetched data from ${url}`), Math.random() * 2000);
      });
  });

  const responses = await Promise.all(fetchPromises);
  console.log("Parallel Requests Responses:", responses);
}

// Usage Examples
(async () => {
  console.log("Task 01: Iterating with Delay");
  await iterateWithDelay(["A", "B", "C"]);

  console.log("\nTask 02: Simulating API Call");
  await fetchDataFromAPI();

  console.log("\nTask 03: Error Handling");
  await fetchDataWithErrorHandling();

  console.log("\nTask 04: Chaining Async Functions");
  await chainedAsyncFunctions();

  console.log("\nTask 05: Concurrent Requests");
  await concurrentRequests();

  console.log("\nTask 06: Parallel Requests");
  await parallelRequests(["https://api.example.com/1", "https://api.example.com/2", "https://api.example.com/3"]);
})();
