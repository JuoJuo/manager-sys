<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1" @on-select="logout">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <MenuItem name="1" class="layout-nav">
              <Icon type="ios-walk"></Icon>
              Logout
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Content class="content">
        <Breadcrumb :style="{margin: '20px 0'}">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>View</BreadcrumbItem>
        </Breadcrumb>

        <Tabs @on-click="tabClick">
          <TabPane label="Employee view" icon="md-apps">
            <Row>
              <Col span="24">
                <Button type="primary"
                        style="margin-left: 10px;margin-right: 50px" @click="preWeek">
                  <Icon type="ios-skip-backward" />
                  Last week
                </Button>
                <Button type="primary" style="margin-right: 50px" @click="thisWeek">
                  This week
                </Button>
                <Button type="primary" style="margin-right: 50px" @click="nextWeek">
                  Next week
                  <Icon type="ios-skip-forward" />
                </Button>
                <DatePicker v-model="dateRange"
                            @on-ok="dateCheck"
                            format="yyyy/MM/dd"
                            type="datetimerange"
                            placement="bottom-end"
                            placeholder="Select date" style="width: 200px">
                </DatePicker>
              </Col>
            </Row>

            <Table :columns="headers"
                   :data="data" class="tb"
                   :disabled-hover="true"
            ></Table>
          </TabPane>
          <!--User-->
          <TabPane label="User" icon="md-person">
            <Button type="info" style="margin-left: 10px"
                    :disabled="this.selectedUsers.length !== 1"
                    @click="openSetGroup">
              Set Group
            </Button>

            <Button type="info" style="margin-left: 10px"
                    :disabled="this.selectedUsers.length !== 1"
                    @click="openModifyUserProfile">
              Modify User Profile
            </Button>
            <Table :columns="uHeaders"
                   :data="uData"
                   @on-selection-change="select"
            ></Table>
          </TabPane>
          <!-- task -->
          <TabPane label="Tasks" icon="ios-document">
            <Button type="info" style="margin-left: 10px"
                    @click="showPopup">
              Add Tasks
            </Button>

            <Button type="info" style="margin-left: 10px"
                    :disabled="selectedTasks.length !== 1"
                    @click="showModifyTask">
              Modify Tasks
            </Button>
            <Button type="info" style="margin-left: 10px"
                    :disabled="selectedTasks.length !== 1"
                    @click="openSetTaskToUser">
              Set Tasks to User
            </Button>
            <Button type="info" style="margin-left: 10px"
                    :disabled="selectedTasks.length !== 1"
                    @click="openSetTaskToGroup">
              Set Tasks to Group
            </Button>
            <Table :columns="tHeaders"
                   :data="tData"
                   @on-selection-change="taskSelect"
            ></Table>
          </TabPane>
          <!-- group -->
          <TabPane label="Group" icon="ios-people">
            <Input v-model="groupName"
                   placeholder="Enter Group Name Click Add To Create Group"
                   style="width: 500px"></Input>
            <Button type="info" style="margin-left: 10px"
                    @click="openAddGroup">
              Add Group
            </Button>
            <Table :columns="gHeaders"
                   :data="groupsList"
            ></Table>
          </TabPane>
        </Tabs>

      </Content>
      <Footer class="layout-footer-center">2020-2099 &copy; Jack</Footer>
    </Layout>

    <!-- add Task-->
    <Modal
      v-model="showAdd"
      title="Add Task"
      :mask-closable="false"
      @on-ok="createTask"
      @on-cancel="cancelTaskCreate">
      <Form :model="taskForm" label-position="left" :label-width="160">
        <FormItem label="Task Name">
          <Input v-model="taskForm.tname"></Input>
        </FormItem>
        <FormItem label="Deadline">
          <DatePicker type="date" placeholder="选择日期"
                      v-model="taskForm.deadline"></DatePicker>
        </FormItem>
        <FormItem label="Task Content">
          <Input v-model="taskForm.tcontent" type="textarea" size="large"
                 :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
        </FormItem>
      </Form>
    </Modal>

    <!-- Modify Tasks -->
    <Modal
      v-model="showModify"
      title="Modify Task"
      :mask-closable="false"
      @on-ok="modifyTask"
      @on-cancel="closeMofiyTask">
      <Form :model="taskModifyForm" label-position="left" :label-width="160">
        <FormItem label="Task Name">
          <Input v-model="taskModifyForm.tname"></Input>
        </FormItem>
        <FormItem label="Deadline">
          <DatePicker type="date" placeholder="选择日期"
                      v-model="taskModifyForm.deadline"></DatePicker>
        </FormItem>
        <FormItem label="Task Content">
          <Input v-model="taskModifyForm.tcontent" type="textarea" size="large"
                 :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
        </FormItem>
      </Form>
    </Modal>

    <!-- set Group for user-->
    <Modal
      v-model="showSetGroup"
      title="Set Group"
      :mask-closable="false"
      @on-ok="seGroupForUser"
      @on-cancel="closeSeGroupForUser">
      <Form :label-width="160">
        <FormItem label="User Name">
          {{ this.selectedUsers.length === 1 ? this.selectedUsers[0].uname: '' }}
        </FormItem>
        <FormItem label="Groups">
          <Select v-model="groupId" style="width:200px">
            <Option  v-for="item in groupsList" :value="item.id" :key="item.id">
              {{ item.gname }}
            </Option>
          </Select>
        </FormItem>
      </Form>
    </Modal>

    <!-- modify user profile-->
    <Modal
      v-model="showModifyUserProfile"
      title="Modify User Profile"
      :mask-closable="false"
      @on-ok="modifyUserProfile"
      @on-cancel="closeModifyUserProfile">
      <Form :model="modifyUserProfileForm" :label-width="80">
        <FormItem label="Username">
          <Input v-model="modifyUserProfileForm.uname" placeholder="username" size="large">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem label="Password">
          <Input v-model="modifyUserProfileForm.pwd"
                 placeholder="password" size="large" type="password">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem label="E-mail" prop="mail">
          <Input v-model="modifyUserProfileForm.mail" placeholder="Enter your e-mail" size="large">
            <Icon type="ios-mail-outline" slot="prepend"/>
          </Input>
        </FormItem>
        <FormItem label="Gender" prop="gender">
          <RadioGroup v-model="modifyUserProfileForm.gender" size="large">
            <Radio label="male">Male</Radio>
            <Radio label="female">Female</Radio>
          </RadioGroup>
        </FormItem>

        <FormItem label="User Type" prop="gender">
          <RadioGroup v-model="modifyUserProfileForm.role" size="large">
            <Radio :label="1" >Normal user</Radio>
            <Radio :label="2">Admin</Radio>
          </RadioGroup>
        </FormItem>

        <FormItem label="Desc" prop="desc">
          <Input v-model="modifyUserProfileForm.desc" type="textarea" size="large"
                 :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
        </FormItem>
      </Form>
    </Modal>

    <!-- set tasks for user-->
    <Modal
      v-model="showSetTask"
      title="Set task to User"
      :mask-closable="false"
      @on-ok="okTaskForUser"
      @on-cancel="cancelTask">
      <Form :label-width="160">
        <FormItem label="Task Name">
          {{ this.selectedTasks.length === 1 ? this.selectedTasks[0].tname: '' }}
        </FormItem>
        <FormItem label="User Name">
          <Select v-model="userId" style="width:200px">
            <Option  v-for="item in data" :value="item.id" :key="item.id">
              {{ item.uname }}
            </Option>
          </Select>
        </FormItem>
      </Form>
    </Modal>

    <!-- set tasks for group-->
    <Modal
      v-model="showSetTaskToGroup"
      title="Set Task to Group"
      :mask-closable="false"
      @on-ok="okTaskToGroup"
      @on-cancel="cancelTask">
      <Form :label-width="160">
        <FormItem label="Task Name">
          {{ this.selectedTasks.length === 1 ? this.selectedTasks[0].tname: '' }}
        </FormItem>
        <FormItem label="Group Name">
          <Select v-model="groupId" style="width:200px">
            <Option  v-for="item in groupsList" :value="item.id" :key="item.id">
              {{ item.gname }}
            </Option>
          </Select>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
  import moment from 'moment';
  import api from '../api/index';

  export default {
    data() {
      return {
        showAdd: false,
        showModify: false,
        showSetGroup: false,
        showSetTask: false,
        showSetTaskToGroup: false,
        showModifyUserProfile: false,
        selectedUsers: [],
        selectedTasks: [],
        selectedGroup: [],
        dateRange: [new Date(), new Date(parseInt(moment().add(7, 'days').format('x'), 10))],
        headers: [],
        data: [],
        uHeaders: [],
        uData: [],
        gHeaders: [
          { type: 'selection', width: 60, align: 'center' },
          { title: 'Group Name', key: 'gname' },
        ],
        taskForm: {
          tname: '',
          deadline: new Date(),
          tcontent: '',
        },
        taskModifyForm: {
          tname: '',
          deadline: new Date(),
          tcontent: '',
        },
        gData: [],
        tHeaders: [],
        tData: [],
        groupId: '',
        groupsList: [],
        taskId: '',
        userId: '',
        groupName: '',
        modifyUserProfileForm: {
          uname: '',
          pwd: '',
          mail: '',
          gender: 'male',
          desc: '',
          role: 1,
          id: '',
        },
      };
    },
    mounted() {
      this.tHeaders = [
        { type: 'selection', width: 60, align: 'center' },
        { title: 'Task Name', key: 'tname' },
        {
          title: 'Dead Line',
          key: 'deadline',
          render: (h, { row, column }) => h('div', {}, moment(new Date(row[column.key])).format('ddd.D.MMM.YYYY')),
        },
        { title: 'Task Content', key: 'tcontent' },
      ];
      this.uHeaders = [
        { type: 'selection', width: 60, align: 'center' },
        { title: 'User Name', key: 'uname' },
        {
          title: 'Group Name',
          key: 'gname',
          render: (h, { row, column }) => h('div', {}, row[column.key] ? row[column.key] : '-'),
        },
        { title: 'Email', key: 'email' },
        {
          title: 'Gender',
          key: 'gender',
          render: (h, { row, column }) => h('div', {}, row[column.key] === 1 ? 'Male' : 'Female'),
        },
        { title: 'Desc', key: 'desc' },
      ];
      this.changeTableHeader();
      this.getFirstTabData();
    },
    methods: {
      logout() {
        this.setCookie('loginId', '', -1);
        this.$router.push({ name: 'login' });
      },
      setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        const expires = `expires=${d.toUTCString()}`;
        document.cookie = `${cname}=${cvalue}; ${expires}`;
      },
      dateCheck() {
        this.getFirstTabData();
      },
      openSetGroup() {
        this.groupId = this.selectedUsers[0].group_id;
        this.showSetGroup = true;
      },
      select(selection) {
        this.selectedUsers = selection;
      },
      taskSelect(selection) {
        this.selectedTasks = selection;
      },
      changeTableHeader() {
        const arr = [{ title: 'Name', key: 'uname' }];
        for (let i = 0; i < 7; i += 1) {
          const mv = moment(this.dateRange[0]).add(i, 'days');
          arr.push({
            title: mv.format('ddd.D.MMM'),
            key: `${mv.format('ddd.D.MMM')}`,
            render: (h, { row, column }) => {
              const tasks = row.taskList.filter(
                ({ deadline }) => moment(new Date(deadline)).format('ddd.D.MMM') === column.key,
              );
              let str = '';
              tasks.forEach(({ tname, tcontent }) => {
                str += tname;
                str += ':';
                str += tcontent;
                str += '<br>';
              });
              return h('div', {
                domProps: {
                  innerHTML: str === ''
                    ? '<span style="color: darkseagreen">No task</span>'
                    : `<span style="color: #3E76F6">${str}</span>`,
                },
              });
            },
          });
        }

        this.headers = arr;
      },
      getFirstTabData() {
        const params = {
          startDate: this.dateRange[0].getTime(),
          endDate: this.dateRange[1].getTime(),
        };

        api.get('/schedule', { params })
          .then(({ data }) => {
            this.changeTableHeader();
            this.data = this.extractData(data);
          });
      },
      tabClick(key) {
        this.getGroups();
        if (key === 1) {
          this.getUsers();
        } else if (key === 2) {
          this.getTasks();
        } else if (key === 0) {
          this.getFirstTabData();
        }
      },
      getGroups() {
        api.get('/getGroups')
          .then(({ data }) => {
            this.groupsList = data;
          });
      },
      getTasks() {
        api.get('/getTasks')
          .then(({ data }) => {
            this.tData = data;
          });
      },
      getUsers() {
        api.get('/getUsers')
          .then(({ data }) => {
            this.uData = data;
          });
      },
      extractData(data) {
        return Object.values(
          data.reduce((result, cur = {}) => {
            if (result[cur.id] && typeof result[cur.id].task_id === 'undefined') {
              return result;
            }

            if (typeof result[cur.id] !== 'undefined') {
              result[cur.id].taskList.push(
                {
                  task_id: cur.task_id,
                  deadline: cur.deadline,
                  tname: cur.tname,
                  tcontent: cur.tcontent,
                },
              );
            } else {
              result[cur.id] = {
                ...cur,
                taskList: [{
                  task_id: cur.task_id,
                  deadline: cur.deadline,
                  tname: cur.tname,
                  tcontent: cur.tcontent,
                }],
              };
            }

            return result;
          }, {}),
        );
      },
      showModifyTask() {
        this.taskModifyForm = {
          tname: this.selectedTasks[0].tname,
          deadline: new Date(this.selectedTasks[0].deadline),
          tcontent: this.selectedTasks[0].tcontent,
        };
        this.showModify = true;
      },
      showPopup() {
        this.showAdd = true;
      },
      ok() {
        this.$Message.info('Clicked ok');
      },
      cancel() {
        this.showAdd = false;
      },
      modifyTask() {
        const param = {
          ...this.taskModifyForm,
          deadline: moment(this.taskModifyForm.deadline).format('YYYY-MM-DD HH:mm:ss'),
          id: this.selectedTasks[0].id,
        };

        api.post('/modifyTask', param)
          .then(({ data }) => {
            this.getTasks();
            this.taskModifyForm = {
              tname: '',
              deadline: new Date(),
              tcontent: '',
            };
            this.$Message.success(data.message);
            this.selectedTasks = [];
          })
          .catch(({ response }) => {
            this.$Message.error(response.data.message);
            this.selectedTasks = [];
          });
      },
      closeMofiyTask() {
        this.showModify = false;
      },
      seGroupForUser() {
        const params = {
          user_id: this.selectedUsers[0].id,
          group_id: this.groupId,
        };
        api.post('/setUserGroup', params)
          .then(({ data }) => {
            this.getUsers();
            this.$Message.success(data.message);
            this.groupId = '';
            this.selectedUsers = [];
          })
          .catch(({ response }) => {
            this.groupId = '';
            this.selectedUsers = [];
            this.$Message.error(response.data.message);
          });
      },
      closeSeGroupForUser() {
        this.showSetGroup = false;
      },
      okTaskToGroup() {
        const params = {
          task_id: this.selectedTasks[0].id,
          group_id: this.groupId,
        };
        api.post('/setTaskToGroup', params)
          .then(({ data }) => {
            this.getTasks();
            this.$Message.success(data.message);
            this.groupId = '';
            this.selectedTasks = [];
          })
          .catch(({ response }) => {
            this.groupId = '';
            this.selectedTasks = [];
            this.$Message.error(response.data.message);
          });
      },
      okTaskForUser() {
        const params = {
          task_id: this.selectedTasks[0].id,
          user_id: this.userId,
        };
        api.post('/setTaskToUser', params)
          .then(({ data }) => {
            this.getTasks();
            this.$Message.success(data.message);
            this.userId = '';
            this.selectedTasks = [];
          })
          .catch(({ response }) => {
            this.$Message.error(response.data.message);
            this.selectedTasks = [];
            this.userId = '';
          });
      },
      cancelTask() {
        this.showSetTask = false;
      },
      cancelTaskCreate() {
        this.showAdd = false;
      },
      createTask() {
        const param = {
          ...this.taskForm,
          deadline: moment(this.taskForm.deadline).format('YYYY-MM-DD HH:mm:ss'),
        };

        api.post('/insertTask', param)
          .then(({ data }) => {
            this.getTasks();
            this.taskForm = {
              tname: '',
              deadline: new Date(),
              tcontent: '',
            };
            this.$Message.success(data.message);
          })
          .catch(({ response }) => {
            this.$Message.error(response.data.message);
          });
      },
      cancelTask2Group() {
        this.showSetTaskToGroup = false;
      },
      openSetTaskToUser() {
        this.showSetTask = true;
      },
      openAddGroup() {
        api.post('/insertGroup', { gname: this.groupName })
          .then(({ data }) => {
            this.getGroups();
            this.groupName = '';
            this.$Message.success(data.message);
          })
          .catch(({ response }) => {
            this.$Message.error(response.data.message);
          });
      },
      openSetTaskToGroup() {
        this.groupId = '';
        this.showSetTaskToGroup = true;
      },
      nextWeek() {
        this.dateRange = [
          new Date(parseInt(moment(this.dateRange[0]).add(7, 'days').format('x'), 10)),
          new Date(parseInt(moment(this.dateRange[0]).add(14, 'days').format('x'), 10)),
        ];
        this.getFirstTabData();
      },
      preWeek() {
        this.dateRange = [
          new Date(parseInt(moment(this.dateRange[0]).add(-7, 'days').format('x'), 10)),
          new Date(parseInt(moment(this.dateRange[0]).add(0, 'days').format('x'), 10)),
        ];
        this.getFirstTabData();
      },
      thisWeek() {
        this.dateRange = [
          new Date(),
          new Date(parseInt(moment().add(7, 'days').format('x'), 10)),
        ];
        this.getFirstTabData();
      },
      modifyUserProfile() {
        this.modifyUserProfileForm.gender = this.modifyUserProfileForm.gender === 'male' ? 1 : 0;

        api.post('/modifyUserProfile', this.modifyUserProfileForm)
          .then(({ data }) => {
            this.getUsers();
            this.selectedUsers = [];
            this.$Message.success(data.message);
          })
          .catch(({ response }) => {
            this.selectedUsers = [];
            this.$Message.error(response.data.message);
          });
      },
      openModifyUserProfile() {
        const {
          uname,
          pwd,
          email,
          desc,
          // eslint-disable-next-line
          role_id,
          id,
        } = this.selectedUsers[0];

        let { gender } = this.selectedUsers[0];
        if (gender === 1) {
          gender = 'male';
        } else {
          gender = 'female';
        }
        this.modifyUserProfileForm = {
          uname,
          pwd,
          id,
          gender,
          desc,
          role: role_id,
          mail: email,
        };
        this.showModifyUserProfile = true;
      },
      closeModifyUserProfile() {
        this.showModifyUserProfile = false;
      },
    },
  };
</script>
<style>
  .layout, .layout.ivu-layout {
    height: 100%;
  }
  .layout .content {
    padding: 0 50px;
  }
  .layout .tb {
    height: calc(100vh - 226px);
  }
  .layout-footer-center {
    text-align: center;
  }
  .layout-nav{
    float: right;
  }
</style>
