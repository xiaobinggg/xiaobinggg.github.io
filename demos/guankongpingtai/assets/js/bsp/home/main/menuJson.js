var menuJson =
[
{id:"1",name:"警情处置",click:"",menucontenturl:"assets/image/bsp/home/tile/警情处置_d59164_81350a.png",
	circleurl:"assets/image/bsp/home/tile/d59164.png",children:[

	{id:"0101",name:"综合调度",click:"",children:[
		{id:"010101",name:"指挥长工作台",click:"showHtmlApp('tpms','dtpms/Leader_WorkPlat','指挥长工作台',1200, 720);"},
		{id:"010102",name:"综合调度台(指挥中心)",click:"showCompScheduling('综合调度台',1400, 750);"},
		{id:"010103",name:"综合调度台(大队)",click:"showCompScheduling('综合调度台',1400, 750);"},
		{id:"010104",name:"警情处置视频...",click:"showCaseDisposeApp('警情处置视频岗',1400,785,'Video');"},
		{id:"010105",name:"警情处置诱导岗",click:"showCaseDisposeApp('警情处置诱导岗',1400,785,'Vms');"},
		{id:"010106",name:"警情处置信号岗",click:"showCaseDisposeApp('警情处置信号岗',1400,785,'Utc');"},
		{id:"010202",name:"自主警情确认",click:"showAlertEventAuditApp('burstmgr','AlertEventAudit','自主警情确认',1440, 900);"}
	]},
	{id:"0102",name:"任务管理",click:"",children:[
		{id:"010201",name:"指挥中心任务追踪管理",click:"showHtmlApp('cstms','main/Main','指挥中心任务管理系统', 1400, 810);"}
	]},
	{id:"0103",name:"警情统计",click:"",children:[
		{id:"010301",name:"自主警情查询",click:"showBurstEventQueryFrame();"},
		{id:"010302",name:"警情工作统计",click:"showHtmlApp('burstmgr','BurstEventStatistic','警情工作统计',1240,600);"}
	]},
	{id:"0104",name:"固定预案",click:"",children:[
		{id:"010401",name:"大型活动预案",click:"showAdvanceHtmlAppThreeInOne('10','大型活动预案');"},
		{id:"010402",name:"恶劣天气预案",click:"showAdvanceHtmlAppThreeInOne('20','恶劣天气预案');"},
		{id:"010403",name:"重点区域预案",click:"showAdvanceHtmlAppThreeInOne('30','重点区域预案');"},
		{id:"010404",name:"大型活动方案",click:"showAdvancePlanHtmlApp('advancemgr','NewAdvancePlanQuery', '大型活动方案',1350,690);"},
		{id:"010405",name:"大屏配置",click:"showHtmlApp('advancemgr','AdvanceScreenModel', '大屏配置',1000,630);"},
		{id:"010406",name:"图层配置",click:"showAreaMaintenanceHtmlApp('advance','AreaMaintenance', '图层配置');"},
		{id:"010407",name:"应急救援资源管理",click:"showHtmlApp('resource','EmergencyResourcesManage_View','应急救援资源管理');"},
		{id:"010408",name:"高速应急预案",click:"showAdvanceHtmlAppThreeInOne('40','高速应急预案');"},
		{id:"010409",name:"预案回放",click:"showHtmlApp('advance','AdvancePlaybackMgr','预案回放');"}
	]},
	{id:"0105",name:"警卫任务",click:"",children:[
		{id:"010501",name:"任务管理",click:"showHtmlApp('guarddutymgr','Guard_Duty', '任务管理');"},
		{id:"010502",name:"视频监控方案",click:"showGardDutyLine('guarddutymgr','GuardDutyVideoExecute','视频监控方案');"},
		{id:"010503",name:"信号监控",click:"showHtmlApp('guarddutymgr','UtcPlanExecute', '信号监控',1180,750);"},
		{id:"010504",name:"信号方案配置",click:"showGardDutyUtcMap('guarddutymgr','UtcPlanConfigure', '信号方案配置',1380,800);"},
		{id:"010505",name:"诱导监控",click:"showHtmlApp('guarddutymgr','VmsPlanExecute', '诱导监控',1350,680);"},
		{id:"010506",name:"视频配置",click:"openGuardDuty_video_executeFrame('视频配置');"},
		{id:"010507",name:"诱导配置",click:"showHtmlApp('guarddutymgr','VmsPlanMgr', '诱导配置',1200,680);"},
		{id:"010508",name:"岗位部署",click:"showHtmlApp('guarddutymgr','DutyArrange', '岗位部署',1350,680);"},
		{id:"010509",name:"常用线路配置",click:"showHtmlApp('guarddutymgr','DutyCfgQuery', '常用路线配置');	"},
		{id:"010510",name:"视频方案执行",click:"showVideoTourHtmlApp_new('B','视频方案执行','视频方案执行');"},
		{id:"010511",name:"视频监控",click:"showVideoTourHtmlApp_new('B','视频监控','视频监控');"},
		{id:"010512",name:"警力监督",click:"showPoliceSupervisionHtmlApp('advancemgr', 'PoliceSupervision', '2')"},
		{id:"010513",name:"工作量统计",click:"showHtmlApp('guarddutymgr','Guard_Duty_Statistics', '工作量统计',1000,750);"},
		{id:"010514",name:"信号方案监控1",click:"showHiCONConfig('guarddutymgr','HiCONConfig','信号方案监控');"},
		{id:"010514",name:"信号方案监控2",click:"showHiCONConfig('guarddutymgr','HiCONConfig','信号方案监控');"},
		{id:"010514",name:"信号方案监控3",click:"showHiCONConfig('guarddutymgr','HiCONConfig','信号方案监控');"},
		{id:"010514",name:"信号方案监控4",click:"showHiCONConfig('guarddutymgr','HiCONConfig','信号方案监控');"},
		{id:"010514",name:"信号方案",click:"showHiCONConfig('guarddutymgr','HiCONConfig','信号方案监控');"}
	]}
	                                	
	
]},

{id:"2",name:"分析研判",click:"",menucontenturl:"assets/image/bsp/home/tile/分析研判_62dbd3_04776e.png",
	circleurl:"assets/image/bsp/home/tile/62dbd3.png",children:[

	{id:"0201",name:"时空分析",click:"",children:[
		{id:"020101",name:"交通流量分析",click:"showHtmlApp('analyzing','TrafficFlowSearch', {'title':'交通流量分析','fullScreen':true});"},
		{id:"020102",name:"平均速度分析",click:"showHtmlApp('analyzing','TrafficAverageSpeedSearch', {'title':'平均速度分析','fullScreen':true});"},
		{id:"020103",name:"时间占有率分析",click:"showHtmlApp('analyzing','TrafficOccupancySearch', {'title':'时间占有率分析','fullScreen':true});"},
		{id:"020104",name:"饱和度分析",click:"showHtmlApp('analyzing','TrafficSaturationSearch', {'title':'饱和度分析','fullScreen':true});"},
		{id:"020105",name:"方向不均衡系数",click:"showHtmlApp('analyzing','UnbalancedCoefficient', {'title':'方向不均衡系数','fullScreen':true});"},
		{id:"020106",name:"进出城车流分析",click:"showHtmlApp('analyzing','AnalysisInCity', {'title':'进出城车流分析','fullScreen':true} );"},
		{id:"020107",name:"交通流综合查询",click:"showHtmlApp('analyzing','TrafficFlowQuery', {'title':'交通流综合查询','fullScreen':true});"},
		{id:"020108",name:"平均行程速度",click:"showHtmlApp('analyzing','AverageTravelSpeed', {'title':'平均行程速度','fullScreen':true});"},
		{id:"020109",name:"道路负荷度",click:"showHtmlApp('analyzing','RoadBurdenDisplay', {'title':'道路负荷度','fullScreen':true});"},
		{id:"020110",name:"路段平均交通流量",click:"showHtmlApp('analyzing','SectionAVGVolumeAnalysis', {'title':'路段平均交通流量','fullScreen':true});"},
		{id:"020111",name:"交叉口总交通量",click:"showHtmlApp('analyzing','IntersectionTrafficFlowDisplay', {'title':'交叉口总交通量','fullScreen':true});"},
		{id:"020112",name:"交叉口饱和度",click:"showHtmlApp('analyzing','IntersectionSaturationDisplay', {'title':'交叉口饱和度','fullScreen':true});"},
		{id:"020113",name:"交叉口平均延误",click:"showHtmlApp('analyzing','IntersectionDelayTimeSearch',{'title':'交叉口平均延误','fullScreen':true});"},
		{id:"020114",name:"交通指数查询",click:"showHtmlApp('analyzing','TrafficIndexSearch',{'title':'交通指数查询','fullScreen':true});"},
		{id:"020115",name:"卡口交通流分析",click:"showHtmlApp('analyzing','KakouFlowSearch', {'title':'卡口交通流分析','fullScreen':true});"}

	]},
	{id:"0202",name:"来源分析",click:"",children:[
		{id:"020201",name:"辅助区域需求控制",click:"showAuxFlowControlHtmlApp('analyzing','AuxFlowControl', '辅助区域需求控制');"},
		{id:"020202",name:"车辆OD分析",click:"showHtmlApp('statisticsmgr','Stat_OriginDestination', '车辆OD分析',1090,630);"}
	]},
	{id:"0203",name:"交通流分析",click:"",children:[
		{id:"020301",name:"常态拥堵路段分析",click:"showHtmlApp('analysis','UsualCongestionAnalysis', '常态拥堵路段分析');"},
		{id:"020302",name:"常态拥堵路段管理",click:"showHtmlApp('analysis','UsualCongestionMgrNew', {'title':'常态拥堵路段管理','fullScreen':true} );"},
		{id:"020303",name:"拥堵路段分析",click:"showHtmlApp('analyzing','CongestionSectionAnalysis', {'title':'拥堵路段分析','fullScreen':true});"},
		{id:"020304",name:"交通运行状态分析",click:"showHtmlApp('analyzing','trafficConditionsAssessment', {'title':'交通运行状态分析','fullScreen':true});"}
	]},{"id":"0204","name":"套牌车分析","click":"",children:[
		{"id":"030103","name":"套牌车审核","click":"showHtmlApp('passmgr','TpcAuditing', '套牌车审核');"},
		{"id":"030104","name":"套牌车查询","click":"showHtmlApp('passmgr','TpcQuery', '套牌车查询');"},
		{"id":"030106","name":"套牌车审核统计","click":"showHtmlApp('passmgr','TpcAuditStatistic', '套牌车审核统计');"}
	]}
]}

,
{id:"3",name:"电子巡逻",click:"",menucontenturl:"assets/image/bsp/home/tile/电子巡逻_d7ad66_915c04.png",
	circleurl:"assets/image/bsp/home/tile/d7ad66.png",children:[
	{id:"0301",name:"视频巡检",click:"",children:[
		{id:"030101",name:"视频人工巡检",click:"showVideoTourHtmlApp_new('A','视频人工巡检','视频人工巡检');"},
		{id:"030102",name:"巡检路线配置",click:"showHtmlApp('cctvmgr','VideoPatrolLineConfig','巡检路线配置');"},
		{id:"030103",name:"巡检工作统计",click:"showWorkStatistic('巡检工作统计','dutymgr','VideoPatrolDetail','700','1250');"}
	]},
	{id:"0302",name:"视频回放",click:"videoPlayBack()"}
]},

{id:"4",name:"日常勤务",click:"",menucontenturl:"assets/image/bsp/home/tile/日常勤务_70ccdb_017b97.png",
	circleurl:"assets/image/bsp/home/tile/70ccdb.png",children:[
	{id:"0401",name:"排班录入",click:"",children:[
		{id:"040101",name:"岗位管理",click:"showDutyPositionHtmlApp('duty3mgr','DutyPosition', '岗位管理');"},
		{id:"040102",name:"日勤排班",click:"showHtmlApp('duty3mgr','Duty3Deploy', '日勤排班',1350,640);"},
		{id:"040103",name:"日勤审核",click:"showHtmlApp('duty3mgr','Duty3Audit', '日勤审核',1400,660);"},
		{id:"040104",name:"排班查询",click:"showHtmlApp('duty4mgr', 'Duty4DeploySearch', '排班查询');	"},
		{id:"040105",name:"日勤级别管理",click:"showHtmlApp('duty3mgr','Duty3DeployLevel', '日勤级别管理',920,350);	"},
		{id:"0450106",name:"日勤时段管理",click:"showHtmlApp('duty3mgr','Duty3TimeInterval', '日勤时段管理',300,450);"},
		{id:"040107",name:"岗位信息管理",click:"showPoliAreDutPosiMgrHtmApp('duty4mgr','Duty4PoliAreMgr', '岗位信息管理');"},
		{id:"040108",name:"支队日勤时间管理",click:"showHtmlApp('duty3mgr','Duty3ZDKZGTimeMgr', '支队日勤时间管理');"},
		{id:"040109",name:"日勤参数管理",click:"showHtmlApp('duty3mgr','Duty3Params', '日勤参数管理');"},
		{id:"040110",name:"警力派发管理",click:"showHtmlApp('duty4mgr','Duty4PoliceAssign', '警力派发管理');"}
	]},

	{id:"0402",name:"勤务督查",click:"",children:[
		{id:"040201",name:"日勤监督",click:"dailyMonitor();"},
		{id:"040202",name:"抽查记录",click:"showHtmlApp('duty3mgr','Duty3Check', '抽查记录');"},
		{id:"040203",name:"日勤考核",click:"showHtmlApp('duty3mgr','Duty3Statistic', '日勤考核',1200,650);"},
		{id:"040204",name:"日勤查询",click:"showHtmlApp('duty3mgr','Duty3Query', '日勤查询',900,605);"},
		{id:"040205",name:"路面抽查",click:"showHtmlApp('duty4mgr', 'Duty4DeployMonitor', '路面抽查');"},
		{id:"040206",name:"督查问题反馈",click:"showHtmlApp('duty3mgr','Duty3ChangePolice', '督查问题反馈');"},
		{id:"040207",name:"支队控制岗监督",click:"dailyMonitor4ZHZX();"},
		{id:"040208",name:"支队日勤监督查询",click:"showHtmlApp('duty3mgr','Duty3MonitorQuery4ZHZX', '支队日勤监督查询',1230,780);"}
	]}
]},
{id:"5",name:"稽查布控",click:"",menucontenturl:"assets/image/bsp/home/tile/稽查布控_5f95cc_024c9d.png",
	circleurl:"assets/image/bsp/home/tile/5f95cc.png",children:[
	{id:"0501",name:"布控管理",click:"",children:[
		{id:"050101",name:"布控管理",click:"showHtmlApp('inspectmgr','InspectDeployManage', '布控管理',1111,650);"},
		{id:"050102",name:"布控类型管理",click:"showHtmlApp('inspectmgr','InspectControlTypeManage', '布控类型管理',900,565);"},
		{id:"050105",name:"布控信息统计",click:"showHtmlApp('inspectmgr','InspectAccount','布控信息统计',1308,700);"}
	]},
	{id:"0502",name:"稽查报警",click:"",children:[
		{id:"050201",name:"实时追踪",click:"showMyHtmlApp('inspectmgr','RealTimeTracking', '实时追踪');"},
		{id:"050202",name:"稽查报警",click:"showInspectAlertManageHtmlApp('passmgr','PassSearch');"},
		{id:"050203",name:"报警查询",click:"showHtmlApp('inspectmgr','AlertQuery','报警查询',920,600);"},
		{id:"050204",name:"高发报警统计",click:"showHtmlApp('inspectmgr','InspectHighFrequentAccount', '高发报警统计',900,565);"}
	]},
	{id:"0503",name:"过车查询",click:"",children:[
		{id:"050301",name:"过车查询",click:"showHtmlApp('passmgr','PassSearch', '过车查询');"},
		{id:"050302",name:"车辆轨迹分析",click:"showVehiclePathAnalysis()"},
		{id:"050303",name:"黑名单过车轨迹",click:"showHtmlApp('passmgr','LowStandCarPassSearch', '黑名单过车轨迹');"}
	]}
]},

{id:"6",name:"交通诱导",click:"showVmsPubHtmlApp('vms','VmsPubQDApp', '诱导发布',1430,680);",menucontenturl:"assets/image/bsp/home/tile/交通诱导_8fc980_347037.png",
	circleurl:"assets/image/bsp/home/tile/8fc980.png"},

{id:"7",name:"信号控制",click:"showHtmlApp('guarddutymgr','UtcPlanExecute','信号监控',1180,750);",
	menucontenturl:"assets/image/bsp/home/tile/信号控制_cf7362_802D23.png",
	circleurl:"assets/image/bsp/home/tile/cf7362.png"
},


{id:"8",name:"设施管理",click:"",menucontenturl:"assets/image/bsp/home/tile/设施管理_60d0b6_167b6a.png",circleurl:"assets/image/bsp/home/tile/60d0b6.png",children:[
	{id:"0801",name:"设施档案",click:"",children:[
		{id:"080101",name:"设施档案管理",click:"showHtmlApp('devicemgr','Faci_Info_View','设施档案管理',1200,800);"},
		{id:"080102",name:"设施分类配置",click:"showHtmlApp('devicemgr','FaciSort_View','设施分类配置');"},
		{id:"080103",name:"安装点管理",click:"showHtmlApp('equipmgr','Equip_MonitorPoint_View','安装点管理',1010,720);"},
		{id:"080104",name:"安装点备案",click:"showHtmlApp('equipmgr','Equip_MonitorPoint_Mark','安装点备案',1010,720);"},
		{id:"080105",name:"路段信息维护",click:"	showHtmlApp('equipmgr','Equip_MonitorSection_View','路段信息维护',1010);"},
		{id:"080106",name:"设备维护商管理",click:"showHtmlApp('eoms','maintainbaseinfo/Equip_Service_Provider_View','设备维护商管理', 1010, 680);"}
	]},
	{id:"0802",name:"设施维护",click:"",children:[
		{id:"080201",name:"设施变更通知",click:"showHtmlApp('eoms','faciinfo/Faci_Info_Notice_View','设施变更通知','900','615');"},
		{id:"080202",name:"设施变更历史",click:"showHtmlApp('eoms','faciinfo/Faci_History_View','设施变更历史','900','615');"},
		{id:"080203",name:"设备信息管理",click:"showHtmlApp('eoms','equip/Equip_View','设备信息管理', 1110, 750);"},
		{id:"080204",name:"设备备案",click:"showHtmlApp('equipmgr','Equip_Mark','设备备案', 1010, 800);"},
		{id:"080205",name:"设备标定",click:"showHtmlApp('equipmgr','EquipCalibrationInfo_View','设备标定',1010);"}
	]},
	{id:"0803",name:"运维管理",click:"",children:[
		{id:"080301",name:"运行监管",click:"showEquipStateOverview('EquipStateOverview','运行监管');"},
		{id:"080302",name:"维修处理",click:"showHtmlFullApp('eoms','equipmaintain/Equip_MaintainDisposal_View','维修处理',1400);"},
		{id:"080303",name:"维修单管理",click:"showHtmlApp('eoms','maintainorder/Equip_RepairOrder_View','维修单管理',1100,680);"},
		{id:"080304",name:"派工单管理",click:"showHtmlApp('eoms','maintaindispatch/MaintainDispatchInfo_View','派工单管理',1020);"},
		{id:"080305",name:"设备故障统计分析",click:"showHtmlApp('eoms','statistics/Equip_Fault_Analyse_View','设备故障统计分析', 1010, 680);"},
		{id:"080306",name:"服务水平分析",click:"showHtmlApp('eoms','statistics/Service_Level_Analyse_View','服务水平分析',1010,720);"},
		{id:"080307",name:"设备故障查询",click:"	showHtmlApp('eoms','statistics/EquipFaultShow','设备故障查询', 1010, 680);"}
	]}
]}
]
