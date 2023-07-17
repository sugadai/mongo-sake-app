const tasksDOM = document.querySelector('.tasks');
const formDOM = document.querySelector('.task-form');
const sakeinputDOM = document.getElementById('sake-input');
// const saketypeDOM = document.getElementById('saketype-input');
const formAlertDOM = document.querySelector('.form-alert');
const saketypeDOM = document.getElementById('saketype');


// /api/v1/tasksからタスクを読み込む
const showTasks = async () =>{
    try {
        //実作apiにアクセス
        const {data: tasks} = await axios.get("/api/v1/tasks");
        //タスクがない時の表示
        // console.log(tasks[0]._id);
        if(tasks.length < 1){
            tasksDOM.innerHTML = `<h5 class="empty-list">酒のデータがありません。</h5>`;
            return
        }
        //タスクを出力
        const allTasks = tasks.map((task) => {
            const {completed, _id, saketype, sakename} = task;
            return             `<div class="single-task ${completed && "task-completed"}">
            <h5>
                <span><i class="far fa-check-circle"></i></span>${sakename}
                <span><i ></i></span>${saketype}
            </h5>
            <div class="task-links">
                <!-- 編集リンク -->
                <a href="edit.html?id=${_id}" class="edit-link">
                    <i class="fas fa-edit"></i>
                </a>
                <button type="button" class="delete-btn" data-id="${_id}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>`;
        }).join("");
        // console.log(allTasks)
        tasksDOM.innerHTML = allTasks;
    } catch (error) {
        console.log(error);
    }
}

showTasks();

//タスクの新規作成
formDOM.addEventListener('submit',async (event)=>{
    event.preventDefault();
    // console.log(sakeType.value);
    // console.log(sakeinputDOM,saketypeDOM)
    const sakename = sakeinputDOM.value;
    const saketype = saketypeDOM.value;
    try {
        await axios.post("/api/v1/tasks",{sakename : sakename,saketype : saketype});
        showTasks();
        sakeinputDOM.value = "";
        formAlertDOM.style.display = "block";
        formAlertDOM.textContent = "日本酒を追加しました。";
        formAlertDOM.classList.add("text-success");
    } catch (error) {
        console.log(error)
        formAlertDOM.style.display = "block";
        formAlertDOM.innerHTML = '無効です。もう一度やり直して下さい。'
    }
    setTimeout(()=>{
        formAlertDOM.style.display = "none"
        formAlertDOM.classList.remove("text-success");
    },3000);
});

//タスクの削除
tasksDOM.addEventListener('click',async(event) => {
    const element = event.target;
    // console.log(element.parentElement);
    if(element.parentElement.classList.contains("delete-btn")){
        const id = element.parentElement.dataset.id;
        // console.log(id)
        try {
            await axios.delete(`/api/v1/tasks/${id}`);
            showTasks();
        } catch (error) {
            console.log(error)
        }
    }
})