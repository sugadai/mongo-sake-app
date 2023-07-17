// const { format } = require("express/lib/response");

const params = window.location.search;
const id = new URLSearchParams(params).get("id");
// console.log(id)
const sakeIdDOM = document.querySelector('.task-edit-id');
const sakeNameDOM = document.querySelector('.task-edit-name');
const sakeTypeDOM = document.querySelector('.task-edit-type');
const editFormDOM = document.querySelector('.single-task-form');
const formAlertDOM = document.querySelector('.form-alert');
const sakeCompletedDOM = document.querySelector('.task-edit-completed');

// 一つの特定のタスクを取得する
const showTask = async () =>{
    try {
        const {data : task} = await axios.get(`/api/v1/tasks/${id}`);
        // console.log(task)
        const {_id ,completed, saketype,sakename} = task;
        sakeIdDOM.textContent = _id;
        sakeNameDOM.value = sakename;
        sakeTypeDOM.value = saketype;
        if(completed){
            sakeCompletedDOM.checked = true;
        }
    } catch (error) {
        console.log(error)
    }
}
showTask();

//タスクの編集
editFormDOM.addEventListener('submit', async (e) =>{
    e.preventDefault();
    try {
        const taskName = sakeNameDOM.value;
        const saketype = sakeTypeDOM.value;
        sakeCompleted =  sakeCompletedDOM.checked;
        const {data : task} = await axios.patch(`/api/v1/tasks/${id}`,
        {
            sakename : taskName,
            saketype : saketype,
            completed : sakeCompleted,
        });
        formAlertDOM.style.display = "block";
        formAlertDOM.textContent = "編集に成功しました。"
        formAlertDOM.classList.add("text-success");
    } catch (error) {
        console.log(error);
        formAlertDOM.style.display = "block";
        formAlertDOM.innerHTML = "無効です。もう一度やり直して下さい。"
    }
    setTimeout(()=>{
        formAlertDOM.style.display = "none"
        formAlertDOM.classList.remove("text-success");
    },3000);
});