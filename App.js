function App() {
    return (
      <div>
        <Person
          name="Peter"
          age={44}
          hobbies={["fishing", "comedy", "drinking with friends"]}
        />
        <Person name="Lois" age={42} hobbies={["piano", "teaching"]} />
        <Person
          name="Chris"
          age={16}
          hobbies={["drawing", "watching TV"]}
        />
        <Person
          name="Meg"
          age={18}
          hobbies={["reading", "trying to fit in", "minding her own business"]}
        />
      </div>
    );
  }
  