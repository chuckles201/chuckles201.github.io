window.addEventListener('DOMContentLoaded', async function () {
    try {
        // 1. Fetch the original Markdown content from a remote URL
        const response = await fetch('https://raw.githubusercontent.com/chuckles201/CudaNN/refs/heads/main/README.md');
        const markdown = await response.text(); // Get the raw Markdown as plain text

        // 2. Replace all Markdown content with new text
        const newMarkdown = `# New Title

This is the new content that replaces the entire original Markdown content.
You can add paragraphs, lists, and more here.

- Bullet point 1
- Bullet point 2
- Bullet point 3

Here's a [link](https://example.com).

**Bold Text**`;

        // 3. Create a Blob with the new Markdown content
        const blob = new Blob([newMarkdown], { type: 'text/markdown' });

        // 4. Create a temporary download link for the Blob
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob); // Create a URL for the Blob
        link.download = 'updated-file.md'; // Set the download file name
        link.click(); // Trigger the download by simulating a click
    } catch (error) {
        console.error('Error fetching or modifying the Markdown file:', error);
    }
});
