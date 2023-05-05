const sseHeaders = {
    // The 'text/event-stream' connection type
    // is required for SSE
    'Content-Type': 'text/event-stream',
    'Access-Control-Allow-Origin': '*',
    // Setting the connection open 'keep-alive'
    'Connection': 'keep-alive',
    'Cache-Control': 'no-cache'
};

export default sseHeaders;
