// headings # trigger a new slide
// headings ## trigger a new vertical slide
module.exports = async (markdown, options) => {
  return markdown
    .split("\n")
    .map((line, index) => {
      if (!/^#/.test(line) || index === 0) return line;
      if (/^#\s/.test(line)) return "\n---\n" + line;
      if (/^##+?\s/.test(line)) return "\n----\n" + line;
      return line;
    })
    .join("\n");
};
