<template>
  <section>
    <header>
      <div class="add-new">
        <p><strong>New Todo:</strong></p>
        <input class="form-control" />
        <button class="btn">Add</button>
      </div>
      <div class="list">
        <div class="edit">
          <h4><strong>Edit:</strong></h4>
          <input class="form-control" />
          <button class="btn">Save</button>
        </div>
        <ul>
          <to-do-list
            v-for="item in items"
            :key="item.id"
            :name="item.name"
            :checked="item.checked"
          >
          </to-do-list>
        </ul>
      </div>
    </header>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          name: "Eat",
          checked: true,
        },
        {
          id: 2,
          name: "Play",
          checked: false,
        },
        {
          id: 3,
          name: "Sleep",
          checked: true,
        },
        {
          id: 4,
          name: "Shopping",
          checked: false,
        },
        {
          id: 5,
          name: "Running",
          checked: false,
        },
      ],
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #fff;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app .head {
  background: #58004d;
  padding: 100px;
}

#app .add-new {
  font-size: 20px;
  color: #6e7fe0;
  background: #fff;
  padding: 0 0 20px 0;
  border: 1px solid #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h4 {
  text-align: left;
  margin-left: 125px;
}

#app .add-new p {
  text-align: left;
  margin-left: 125px;
}

#app .add-new .form-control {
  font-size: 20px;
  border: 1px #6e7fe0 solid;
}

#app .add-new .btn {
  margin-left: 10px;
  border-radius: 5px;
  padding: 6px 20px;
  font-size: 15px;
}

#app .list {
  margin-top: -50px;
  font-size: 20px;
  color: #6e7fe0;
  background: #fff;
  padding: 0 0 20px 0;
  border: 1px solid #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

#app .list p {
  text-align: left;
  margin-left: 125px;
  width: 60%;
  position: absolute;
}

#app .list .form-control {
  font-size: 20px;
  border: 1px #6e7fe0 solid;
}

#app .list .btn {
  margin-left: 10px;
  border-radius: 5px;
  padding: 6px 20px;
  font-size: 15px;
}

#app .list .btn-edit {
  margin-left: 340px;
  position: relative;
}

#app .list .btn-delete {
  margin-left: 10px;
  position: relative;
}

#app .list .edit {
  padding-bottom: 20px;
  border-bottom: 3px solid #f1f1f1;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

.active {
  background: #98dfbf;
}

#app .list p {
    text-align: left;
    margin-left: 125px;
    width: 60%;
    position: absolute;
    margin-top: -29px;
}
</style>
