  // useEffect(() => {
  //   console.log("AllTasks", getAllTaskStatus);
  //   let cols = columns;
  //   if (getAllTaskStatus && getAllTaskStatus.data) {
  //     Object.entries(columns[0]).map(([columnId, column], index) => {
  //       console.log("column", column);

  //       cols[0] = { ...cols[0], [columnId]: { ...column, items: getAllTaskStatus.data.filter(o => o.status === column.name) } }
  //       // cols.push({ ...column, column: getAllTaskStatus.data.filter(o => o.status === column.name) })
  //     });
  //     console.log("cols", cols);

  //     setColumns({...cols});
  //   }
  // }, [getAllTaskStatus])

  const columnsFromBackend = {
    [uuid()]: {
      name: "Assigned",
      items: [],
    },
    [uuid()]: {
      name: "In-Progress",
      items: [],
    },
    [uuid()]: {
      no: "4",
      name: "Under Review",
      items: [],
    },
    [uuid()]: {
      no: "5",
      name: "Completed",
      items: [],
    },
  };