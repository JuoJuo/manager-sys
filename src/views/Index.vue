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
          <!--User-->
          <TabPane label="Waiter" icon="md-person">
            <Button type="info" style="margin-left: 10px"
                    @click="openAddWaiter">
              Add Waiter
            </Button>

            <Button type="info" style="margin-left: 10px"
                    :disabled="this.selectedWaiters.length !== 1"
                    @click="openModifyWaiter">
              Modify Waiter
            </Button>

            <Button type="info" style="margin-left: 10px"
                    :disabled="this.selectedWaiters.length !== 1"
                    @click="showDeleteWaiterModal">
              Delete Waiter
            </Button>
            <Table :columns="uHeaders"
                   :data="waiterList"
                   @on-selection-change="select"
            ></Table>
          </TabPane>
          <!-- Order -->
          <TabPane label="Order" icon="ios-document">
            <Button type="info" style="margin-left: 10px"
                    :disabled="selectedOrders.length !== 1"
                    @click="changeStatus">
              Change Order Status
            </Button>
            <Table :columns="tHeaders"
                   :data="orderList"
                   @on-selection-change="orderSelect"
            ></Table>
          </TabPane>

          <!-- Goods -->
          <TabPane label="Goods" icon="ios-document">
            <Button type="info" style="margin-left: 10px"
                    :disabled="selectedOrders.length !== 1"
                    @click="changeStatus">
              Add Goods
            </Button>

            <Button type="info" style="margin-left: 10px"
                    :disabled="selectedOrders.length !== 1"
                    @click="changeStatus">
              Modify Goods
            </Button>

            <Button type="info" style="margin-left: 10px"
                    :disabled="selectedOrders.length !== 1"
                    @click="changeStatus">
              Delete Goods
            </Button>
            <Table :columns="tHeaders"
                   :data="orderList"
                   @on-selection-change="orderSelect"
            ></Table>
          </TabPane>
        </Tabs>
      </Content>
      <Footer class="layout-footer-center">2020-2099 &copy; Jack</Footer>
    </Layout>
    <!-- Add Waiter -->
    <Modal
      v-model="showAdd"
      title="Add Waiter"
      :mask-closable="false"
      @on-ok="createWaiter"
      @on-cancel="cancelWaiterCreate">
      <Form :model="waiterForm" label-position="left" :label-width="160">
        <FormItem label="waiter phone">
          <Input v-model="waiterForm.phone"></Input>
        </FormItem>
        <FormItem label="email">
          <Input v-model="waiterForm.email"></Input>
        </FormItem>
        <FormItem label="password">
          <Input v-model="waiterForm.password" type="password"></Input>
        </FormItem>
      </Form>
    </Modal>

    <!-- modify Waiter -->
    <Modal
      v-model="showModifyWaiter"
      title="Modify Waiter"
      :mask-closable="false"
      @on-ok="ModifyWaiter"
      @on-cancel="cancelModifyWaiter">
      <Form :model="waiterFormModify" label-position="left" :label-width="160">
        <FormItem label="waiter phone">
          <Input v-model="waiterFormModify.phone"></Input>
        </FormItem>
        <FormItem label="email">
          <Input v-model="waiterFormModify.email"></Input>
        </FormItem>
        <FormItem label="password">
          <Input v-model="waiterFormModify.password" type="password"></Input>
        </FormItem>
      </Form>
    </Modal>

    <!-- delete Waiter -->
    <Modal
      v-model="showDeleteWaiter"
      title="Title"
      @on-ok="deleteWaiter">
      <p>Are you sure delete this waiter account?</p>
    </Modal>

    <!-- Change Order Status -->
    <Modal
      v-model="changeStatusModal"
      title="Modify Waiter"
      :mask-closable="false"
      @on-ok="ModifyOrder"
      @on-cancel="cancelModifyOrder">
      <Form :model="orderFormSelected" label-position="left" :label-width="160">
        <FormItem label="Order Id">
          {{ orderFormSelected._id }}
        </FormItem>
        <FormItem label="Status">
          <Input v-model="orderFormSelected.status"></Input>
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
      uHeaders: [],
      waiterList: [],
      showAdd: false,
      waiterForm: {
        phone: '',
        email: '',
        password: '',
      },
      waiterFormModify: {
        phone: '',
        email: '',
        password: '',
      },
      showModifyWaiter: false,
      showDeleteWaiter: false,
      selectedWaiters: [],
      separate: '--------------------------',
      changeStatusModal: false,
      selectedOrders: [],
      tHeaders: [],
      tData: [],
      orderList: [],
      orderFormSelected: {},
    };
  },
  mounted() {
    this.tHeaders = [
      { type: 'selection', width: 60, align: 'center' },
      { title: 'Order Number', key: '_id' },
      {
        title: 'Order Time',
        key: 'orderTime',
        render: (h, { row, column }) => h('div', {}, moment(new Date(row[column.key])).format('ddd.D.MMM.YYYY')),
      },
      {
        title: 'Pick Uptime',
        key: 'mealTime',
        render: (h, { row, column }) => h('div', {}, moment(new Date(row[column.key])).format('ddd.D.MMM.YYYY')),
      },
      {
        title: 'Guest phone',
        key: 'guest',
        render: (h, { row, column }) => h('div', {}, row[column.key].phone),
      },
      {
        title: 'Goods Name',
        key: 'goods',
        render: (h, { row, column }) => h('div', {},
          row[column.key].map(({ name }) => name).join(',')),
      },
      { title: 'Status', key: 'status' },
    ];
    this.uHeaders = [
      { type: 'selection', width: 60, align: 'center' },
      { title: 'Phone', key: 'phone' },
      {
        title: 'Email',
        key: 'email',
      },
      { title: 'Password', key: 'password' },
    ];
    this.getWaiters();
    this.getOrders();
  },
  methods: {
    getWaiters() {
      api.get('/waiter')
        .then(({ data }) => {
          this.waiterList = data;
        });
    },
    openAddWaiter() {
      this.showAdd = true;
    },
    tabClick(key) {
      if (key === 1) {
        this.getWaiters();
      } else if (key === 2) {
        this.getTasks();
      }
    },
    openModifyWaiter() {
      this.waiterFormModify = {
        email: this.selectedWaiters[0].email,
        password: this.selectedWaiters[0].password,
        phone: this.selectedWaiters[0].phone,
        // eslint-disable-next-line no-underscore-dangle
        _id: this.selectedWaiters[0]._id,
      };
      this.showModifyWaiter = true;
    },
    cancelWaiterCreate() {
      this.showAdd = false;
    },
    createWaiter() {
      const param = {
        ...this.waiterForm,
      };

      api.post('/waiter', param)
        .then(() => {
          this.getWaiters();
          this.waiterForm = {
            phone: '',
            email: '',
            password: '',
          };
        })
        .catch(({ response }) => {
          this.$Message.error(response.data.message);
        });
    },
    cancelModifyWaiter() {
      this.showModifyWaiter = false;
    },
    ModifyWaiter() {
      const param = this.waiterFormModify;
      api.put('/waiter', param)
        .then(() => {
          this.getWaiters();
          this.selectedWaiters = [];
        });
    },
    deleteWaiter() {
      const params = {
        email: this.selectedWaiters[0].email,
        password: this.selectedWaiters[0].password,
        phone: this.selectedWaiters[0].phone,
        // eslint-disable-next-line no-underscore-dangle
        _id: this.selectedWaiters[0]._id,
      };
      api.delete('/waiter', { data: params })
        .then(() => {
          this.getWaiters();
          this.selectedWaiters = [];
        });
    },
    showDeleteWaiterModal() {
      this.showDeleteWaiter = true;
    },
    changeStatus() {
      this.orderFormSelected = { ...this.selectedOrders[0] };
      this.changeStatusModal = true;
    },
    orderSelect(selection) {
      this.selectedOrders = selection;
    },
    getOrders() {
      api.get('/order')
        .then(({ data }) => {
          this.orderList = data;
        });
    },
    ModifyOrder() {
      const param = {
        status: this.orderFormSelected.status,
        // eslint-disable-next-line no-underscore-dangle
        _id: this.selectedOrders[0]._id,
      };
      api.put('/order', param)
        .then(() => {
          this.getOrders();
          this.selectedOrders = [];
        });
    },
    cancelModifyOrder() {
      this.changeStatusModal = false;
    },
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
    select(selection) {
      this.selectedWaiters = selection;
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
