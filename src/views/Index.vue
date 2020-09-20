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

        <Tabs @on-click="tabClick" v-if="!waiter">
          <!--User-->
          <TabPane label="Waiter" icon="md-person">
            <Button type="info" style="margin-left: 10px"
                    @click="openAddWaiter">
              Add Waiter
            </Button>

            <Button type="warning" style="margin-left: 10px"
                    :disabled="this.selectedWaiters.length !== 1"
                    @click="openModifyWaiter">
              Modify Waiter
            </Button>

            <Button type="error" style="margin-left: 10px"
                    :disabled="this.selectedWaiters.length !== 1"
                    @click="showDeleteWaiterModal">
              Delete Waiter
            </Button>
            <Table :columns="oHeaders"
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
            <Table :columns="wHeaders"
                   :data="orderList"
                   @on-selection-change="orderSelect"
            ></Table>
          </TabPane>

          <!-- Goods -->
          <TabPane label="Goods" icon="ios-document">
            <Button type="info" style="margin-left: 10px"
                    @click="changeGoodsModal">
              Add Goods
            </Button>

            <Button type="warning" style="margin-left: 10px"
                    :disabled="selectedGoods.length !== 1"
                    @click="modifyGoodsShow">
              Modify Goods
            </Button>

            <Button type="error" style="margin-left: 10px"
                    :disabled="selectedGoods.length !== 1"
                    @click="showDeleteGoods = true">
              Delete Goods
            </Button>
            <Table :columns="gHeaders"
                   :data="goodsList"
                   @on-selection-change="goodsSelect"
            ></Table>
          </TabPane>
        </Tabs>

        <Tabs @on-click="tabClick" v-else>
          <!-- Order -->
          <TabPane label="Order" icon="ios-document">
            <Button type="info" style="margin-left: 10px"
                    :disabled="selectedOrders.length !== 1"
                    @click="changeStatus">
              Change Order Status
            </Button>
            <Table :columns="wHeaders"
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
      title="Notice"
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

    <!-- Add Goods -->
    <Modal
      v-model="goodsModalShow"
      title="Add Goods"
      :mask-closable="false"
      @on-ok="createGoods"
      @on-cancel="() => goodsModalShow = false">
      <Form :model="goodsForm" label-position="left" :label-width="160">
        <FormItem label="Goods Name">
          <Input v-model="goodsForm.name"></Input>
        </FormItem>
        <FormItem label="Description">
          <Input v-model="goodsForm.desc"></Input>
        </FormItem>
        <FormItem label="Price">
          <Input v-model="goodsForm.price"></Input>
        </FormItem>
        <FormItem label="Goods Type">
          <RadioGroup v-model="goodsForm.type">
            <Radio label="Single item"></Radio>
            <Radio label="Meal"></Radio>
            <Radio label="Snack"></Radio>
            <Radio label="Drinks"></Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="Goods Image">
          <Upload
                  ref="upload"
                  :show-upload-list="false"
                  :default-file-list="defaultList"
                  :on-success="handleSuccess"
                  :format="['jpg','jpeg','png']"
                  :max-size="1024"
                  name="avatar"
                  :on-format-error="handleFormatError"
                  :on-exceeded-size="handleMaxSize"
                  type="drag"
                  action="/goods/create"
                  style="display: inline-block;width:58px;">
            <div style="width: 58px;height:58px;line-height: 58px;">
              <Icon type="ios-camera" size="20"></Icon>
            </div>
          </Upload>
          <div class="demo-upload-list" v-for="item in defaultList">
            <img :src="item.url" style="width: 60px; height: 40px">
          </div>
        </FormItem>
      </Form>
    </Modal>

    <!-- Modify Goods -->
    <Modal
      v-model="goodsModalModifyShow"
      title="Modify Goods"
      :mask-closable="false"
      @on-ok="modifyGoods"
      @on-cancel="() => goodsModalModifyShow = false">
      <Form :model="goodsForm" label-position="left" :label-width="160">
        <FormItem label="Goods Name">
          <Input v-model="goodsForm.name"></Input>
        </FormItem>
        <FormItem label="Description">
          <Input v-model="goodsForm.desc"></Input>
        </FormItem>
        <FormItem label="Price">
          <Input v-model="goodsForm.price"></Input>
        </FormItem>
        <FormItem label="Goods Type">
          <RadioGroup v-model="goodsForm.type">
            <Radio label="Single item"></Radio>
            <Radio label="Meal"></Radio>
            <Radio label="Snack"></Radio>
            <Radio label="Drinks"></Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="Goods Image">
          <Upload
                  ref="upload"
                  :show-upload-list="false"
                  :default-file-list="defaultList"
                  :on-success="handleSuccess"
                  :format="['jpg','jpeg','png']"
                  :max-size="100"
                  name="avatar"
                  :on-format-error="handleFormatError"
                  :on-exceeded-size="handleMaxSize"
                  type="drag"
                  action="/goods/create"
                  style="display: inline-block;width:58px;">
            <div style="width: 58px;height:58px;line-height: 58px;">
              <Icon type="ios-camera" size="20"></Icon>
            </div>
          </Upload>
          <div class="demo-upload-list" v-for="item in defaultList">
            <img :src="item.url" style="width: 60px; height: 40px">
          </div>
        </FormItem>
      </Form>
    </Modal>

    <!-- delete Goods -->
    <Modal
            v-model="showDeleteGoods"
            title="Notice"
            @on-ok="deleteGoods">
      <p>Are you sure delete this goods?</p>
    </Modal>
  </div>
</template>

<script>
import moment from 'moment';
import api from '../api/index';

export default {
  data() {
    return {
      oHeaders: [],
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
      wHeaders: [],
      tData: [],
      orderList: [],
      orderFormSelected: {},
      separate2: '--------------------------',
      goodsModalShow: false,
      gHeaders: [],
      goodsList: [],
      selectedGoods: [],
      goodsForm: {
        name: '',
        desc: '',
        price: '',
        type: 'Single item',
        url: '',
      },
      defaultList: [],
      uploadList: [],
      goodsModalModifyShow: false,
      showDeleteGoods: false,
      waiter: null,
    };
  },
  mounted() {
    this.waiter = localStorage.getItem('waiter');

    this.wHeaders = [
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
    this.oHeaders = [
      { type: 'selection', width: 60, align: 'center' },
      { title: 'Phone', key: 'phone' },
      {
        title: 'Email',
        key: 'email',
      },
      { title: 'Password', key: 'password' },
    ];
    this.gHeaders = [
      { type: 'selection', width: 60, align: 'center' },
      { title: 'Name', key: 'name' },
      {
        title: 'Description',
        key: 'desc',
      },
      {
        title: 'Price',
        key: 'price',
      },
      {
        title: 'Type',
        key: 'type',
      },
      {
        title: 'Image',
        key: 'url',
        render: (h, { row, column }) => h('img', { style: { width: '60px', height: '40px' }, domProps: { src: row[column.key] } }, ''),
      },
    ];
    this.getWaiters();
    this.getOrders();
    this.getGoods();
  },
  methods: {
    modifyGoods() {
      const param = this.goodsForm;
      api.put('/goods', param)
        .then(() => {
          this.getGoods();
          this.selectedGoods = [];
        });
    },
    modifyGoodsShow() {
      this.goodsModalModifyShow = true;
      this.goodsForm = {
        ...this.selectedGoods[0],
      };
      this.defaultList = [{ name: '', url: this.goodsForm.url }];
    },
    getWaiters() {
      api.get('/waiter')
        .then(({ data }) => {
          this.waiterList = data;
        });
    },
    openAddWaiter() {
      this.showAdd = true;
    },
    tabClick() {
      this.getOrders();
      this.getWaiters();
      this.getGoods();
    },
    openModifyWaiter() {
      this.waiterFormModify = {
        email: this.selectedWaiters[0].email,
        password: this.selectedWaiters[0].password,
        phone: this.selectedWaiters[0].phone,
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
        _id: this.selectedWaiters[0]._id,
      };
      api.delete('/waiter', { data: params })
        .then(() => {
          this.getWaiters();
          this.selectedWaiters = [];
        });
    },
    deleteGoods() {
      const params = {
        _id: this.selectedGoods[0]._id,
      };
      api.delete('/goods', { data: params })
        .then(() => {
          this.getGoods();
          this.selectedGoods = [];
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
    goodsSelect(selection) {
      this.selectedGoods = selection;
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
    getGoods() {
      api.get('/goods')
        .then(({ data }) => {
          this.goodsList = data;
        });
    },
    changeGoodsModal() {
      this.goodsModalShow = true;
      this.defaultList = [];
    },
    createGoods() {
      const param = {
        ...this.goodsForm,
        url: this.defaultList[0].url,
      };

      api.post('/goods', param)
        .then(() => {
          this.getGoods();
          this.goodsForm = {
            name: '',
            desc: '',
            price: '',
            type: 'Single item',
            url: '',
          };
          this.defaultList = [];
        })
    },
    logout() {
      api.post('logout');
      this.$router.push({ name: 'login' });
    },
    select(selection) {
      this.selectedWaiters = selection;
    },
    handleFormatError (file) {
      this.$Notice.warning({
        title: 'The file format is incorrect',
        desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
      });
    },
    handleMaxSize (file) {
      this.$Notice.warning({
        title: 'Exceeding file size limit',
        desc: 'File  ' + file.name + ' is too large, no more than 100K.'
      });
    },
    handleSuccess (res, file) {
      file.url = `/${res.data}`;
      file.name = file.name;

      this.defaultList = [file];
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
