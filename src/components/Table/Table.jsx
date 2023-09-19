import "./style.css";

export const Table = ({ tableName, configuration, testGenerator }) => {
  return (
    <section className="table">
      <article>
        <table border="1">
          <caption>
            <h2>{tableName}</h2>
          </caption>
          <thead>
            <tr>
              {configuration &&
                configuration.map((tableColumn, key) => (
                  <th key={key}>
                    <h6>{tableColumn.name}</h6>
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {configuration &&
              configuration.map((tableColumn, key) => (
                <td key={key}>
                  {tableColumn.values &&
                    tableColumn.values.map((value, key) => (
                      <tr key={key}>
                        <p>{value}</p>
                      </tr>
                    ))}
                </td>
              ))}
          </tbody>
        </table>
        <div>{testGenerator && <p>{testGenerator}</p>}</div>
      </article>
    </section>
  );
};
