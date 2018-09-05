# 本文总结公司的.net开发，6.2框架使用

## 1. 页面挂载

如果你是新建项目如 `SIE.Dome` 
> 新建项目为控制台应用,这个项目被用于存放实体文件，和有关实体的控制器

需要在`SIE.Dome`项目中创建两个类文件`DemoEntityDataProvider.cs`和`DemoModule.cs`

`DemoEntityDataProvider.cs`是作为实体数据提供者

```
DemoModule.cs
目前不了解有什么用
```

新建另一个项目如`SIE.Wpf.Demo`

> 这个项目主要用于存放实体的视图文件以及所有的在视图层的操作

在这个项目中需要创建两个类文件`CodeModel.cs`和`DemoUIModule.cs`

`DemoUIModule.cs`用于挂载视图页面
`CodeModel.cs` 上不清除有什么用

## 2. 功能制作

### 1. 引用实体作为新实体的属性

如下：实体文件
```c#
    [RootEntity, Serializable]
    //RootEntityz设置类为跟实体，
    [CriteriaQuery]
    //引用查询实体
    [Label("产品管理")]
	public partial class ProductManagement : DataEntity
    //ProductManagement继承公司封装的数据实体DataEntity
	{
        #region 产品分类 ProductCat
        //新实体名ProductCat
        /// <summary>
        /// 产品分类Id
        /// </summary>
        /// IRefIdProperty设置为引用实体属性
        public static readonly IRefIdProperty ProductCatIdProperty =
            P<ProductManagement>.RegisterRefId(e => e.ProductCatId, ReferenceType.Normal);
            //实体类名ProductManagement
        /// <summary>
        /// 产品分类Id
        /// </summary>
        public double ProductCatId
        {
            get { return (double)this.GetRefId(ProductCatIdProperty); }
            set { this.SetRefId(ProductCatIdProperty, value); }
        }
        //ProductCategory：引用的实体名
        public static readonly RefEntityProperty<ProductCategory> ProductCatProperty =
            P<ProductManagement>.RegisterRef(e => e.ProductCat, ProductCatIdProperty);
        /// <summary>
        /// 产品分类
        /// </summary>
        public ProductCategory ProductCat
        {
            get { return this.GetRefEntity(ProductCatProperty); }
            set { this.SetRefEntity(ProductCatProperty, value); }
        }
        #endregion
    }
    internal class ProductManagementConfig : EntityConfig<ProductManagement>
	{
		/// <summary>
      	  	/// 配置元数据
    	    	/// </summary>
		protected override void ConfigMeta()
		{
			Meta.MapTable("PRO_MAN").MapAllProperties();
			Meta.EnablePhantoms();
		}
	}    
```
### 2.重写视图命令

### 3.主从视图配置

