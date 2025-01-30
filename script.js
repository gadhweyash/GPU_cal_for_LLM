function calculateMemory() {
    let P = parseFloat(document.getElementById("params").value); // Get # of parameters
    let Q = parseInt(document.getElementById("bits").value); // Get selected quantization bits
    let B = 4; // 4 bytes per parameter

    if (isNaN(P) || P <= 0) {
        document.getElementById("result").innerText = "Please enter a valid number of parameters.";
        return;
    }

    let totalParams = P * 1e9; // Convert Billion to actual number
    let M = ((totalParams * B) / (32 / Q)) * 1.2; // Apply formula
    M = M / 1e9; // Convert bytes to GB
    M = M.toFixed(2); // Round to 2 decimal places

    document.getElementById("result").innerText = `Required GPU Memory: ${M} GB`;
}
