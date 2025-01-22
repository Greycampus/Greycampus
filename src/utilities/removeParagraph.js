export const removeParagraph=()=>{
        const paragraphs = document.querySelectorAll('p');
        paragraphs.forEach((p) => {
          if (/^\s*$/.test(p.textContent)) {
            // Add your styles or logic here
            p.style.display = 'none'; // Example: hide the <p> tag
          }
        });
}