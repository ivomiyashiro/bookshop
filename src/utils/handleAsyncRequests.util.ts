export async function handleAsyncRequests( promises: Promise<any>[] ) {
  try {
    const responses = await Promise.all(promises);
    return responses.reduce((acc, response) => ({ ...acc, ...response }), {});
  } catch (error) {
    throw error;
  }
}
