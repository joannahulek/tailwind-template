function renderHero() {
    const container = document.getElementById('hero-container');
    if (!container) {
        console.error('Element #hero-container nie został znaleziony.');
        return;
    }

    let content = `
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <table width="100%">
          <tr>
            <th colspan="3">
              <h1>Joanna Hulek</h1>
              <hr width="80%">
              <h2>Frontend Development · Agile Mindset · Public Speaking</h2>
            </th>
            <th rowspan="4">
              <img src="https://media.licdn.com/dms/image/D4D03AQGqlJjjuT1LtA/profile-displayphoto-shrink_400_400/0/1712988603033?e=2147483647&v=beta&t=_-6l2Gi3aHr7EDKczbix6JevZ61bLKd95cl1J7RdvPk" width="100" height="100"/>
            </th>
          </tr>
          <tr>
            <td><a href="mailto:my@email.com">my@email.com</a></td>
            <td><a href="https://www.linkedin.com/in/joannahulek/" target="_blank">linkedin.com/in/joannahulek</a></td>
            <td><a href="https://joannahulek.github.io/" target="_blank">joannahulek.github.io</a></td>
          </tr>
          <tr>
            <td><a href="tel:+48XXXXXXXXX">+48XXXXXXXXX</a></td>
            <td><a href="https://github.com/joannahulek" target="_blank">github.com/joannahulek</a></td>
            <td>Kraków</td>
          </tr>
          <tr>
            <td colspan="3"><p>Summary...</p></td>
          </tr>
        </table>
      </div>
    `;
    container.innerHTML = content;
}

renderHero();
