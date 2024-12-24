window.addEventListener('DOMContentLoaded', async function () {
    try {
        // 1. Fetch the original Markdown content from a remote URL
        const response = await fetch('https://raw.githubusercontent.com/chuckles201/CudaNN/refs/heads/main/README.md');
        const markdown = await response.text(); // Get the raw Markdown as plain text

        // Read the parameter
        const scripts = document.getElementsByTagName('script');
        const currentScript = Array.from(scripts).find(script => script.src.includes('jupy_load.js'));
        const parameter = currentScript.getAttribute('data-parameter');
        console.log(parameter); // Will print: "test"

    } catch (error) {
        console.error('Error fetching or modifying the Markdown file:', error);
    }
});