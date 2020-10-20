var documenterSearchIndex = {"docs":
[{"location":"#PlotPlants.jl","page":"Home","title":"PlotPlants.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Yujie's PlotPlants tool.","category":"page"},{"location":"#Usage","page":"Home","title":"Usage","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"using PlotPlants\n\n# use all the functions in the project\nuse_serif_tex();\nfig,array_ax = create_canvas(\"1\", ncol=2, nrow=2, ax_ind=[1,3,4]);\nset_titles!(array_ax);","category":"page"},{"location":"API/#PlotPlants","page":"API","title":"PlotPlants","text":"","category":"section"},{"location":"API/","page":"API","title":"API","text":"CurrentModule = PlotPlants","category":"page"},{"location":"API/#Set-global-font","page":"API","title":"Set global font","text":"","category":"section"},{"location":"API/","page":"API","title":"API","text":"The PyPlot package of Julia uses sans font by default, by my favorite font is     serif type. Also, some fonts do not have normal greek letters in their     library, like the Times only have italic greek letters. To change the     default font to serif and use normal greek letters, the PlotPlants package     provides a use_serif_tex function, which use LaTeX amsmath and     upgreek packages.","category":"page"},{"location":"API/","page":"API","title":"API","text":"use_serif_tex","category":"page"},{"location":"API/#PlotPlants.use_serif_tex","page":"API","title":"PlotPlants.use_serif_tex","text":"use_serif_tex()\n\nSet default font to serif and use latex wrapper for texts\n\n\n\n\n\n","category":"function"},{"location":"API/#Symbols-and-units","page":"API","title":"Symbols and units","text":"","category":"section"},{"location":"API/","page":"API","title":"API","text":"To facilitate the use of LaTeX packages, functions latex_symbol and     latex_unit are provided to rapidly generate equation symbols and     units. By default,","category":"page"},{"location":"API/","page":"API","title":"API","text":"if the number of letters is one, the letter will be set to italic, otherwise,   the letters will be normal (not italic);\nif the letter is greek, the letter will be normal;\nall sub- and super-scripts are normal;","category":"page"},{"location":"API/","page":"API","title":"API","text":"latex_symbol\nlatex_unit","category":"page"},{"location":"API/#PlotPlants.latex_symbol","page":"API","title":"PlotPlants.latex_symbol","text":"latex_symbol(mid::String;\n             sub::String,\n             sup::String,\n             presub::String,\n             presup::String)\n\nReturn the latex symbol string, given\n\nmid Center symbol, italic only when length>1\nsub Optional: subscript after the mid\nsup Optional: supscript after the mid\npresub Optional: subscript before the mid\npresup Optional: supscript before the mid\n\n\n\n\n\n","category":"function"},{"location":"API/#PlotPlants.latex_unit","page":"API","title":"PlotPlants.latex_unit","text":"latex_unit(id::String; paren::Bool, squared::Bool, space::Bool)\n\nReturn the unit, given\n\nid Identifier of the unit (if not in libary, use id as unit)\nparen Optional: if true, include parenthesis\nsquared Optional: if true, use [], otherwise, use ()\nspace Optional: if true, add a SPACE at the beginning\n\nThe predefined units include\n\nA μmol CO₂ m⁻² s⁻¹\nE mol H₂O m⁻² s⁻¹\nE_MMOL mmol H₂O m⁻² s⁻¹\nG mol m⁻² s⁻¹\nPAR μmol m⁻² s⁻¹\nT °C\nWUE μmol mol⁻¹\n\n\n\n\n\n","category":"function"},{"location":"API/#Create-canvas","page":"API","title":"Create canvas","text":"","category":"section"},{"location":"API/","page":"API","title":"API","text":"An customized funtion create_canvas is provided to genrate figure and     an array of axis from a few keywords. For example,","category":"page"},{"location":"API/","page":"API","title":"API","text":"create_canvas(fig_id) returns a figure with one axis;\ncreate_canvas(fig_id, nrow=2, ncol=2) returns a figure will four subplots;\ncreate_canvas(fig_id, nrow=2, ncol=2, ax_ind=[1,2,4]) returns a figure with   three subplot (the left bottom panel is empty);","category":"page"},{"location":"API/","page":"API","title":"API","text":"create_canvas","category":"page"},{"location":"API/#PlotPlants.create_canvas","page":"API","title":"PlotPlants.create_canvas","text":"create_canvas(id;\n              ncol::Int,\n              nrow::Int,\n              ax_ind::Array{Int,1},\n              figsize::Tuple{Number,Number},\n              dpi::Number)\n\nCreate a canvas, given\n\nid ID of the figure\nncol Number of columns in the figure\nnrow Number of rows in the figure\nax_ind Given indicies of the subplots in the figure\nfigsize Given canvas size\ndpi Given pixels per inch\n\n\n\n\n\n","category":"function"},{"location":"API/#Shapes","page":"API","title":"Shapes","text":"","category":"section"},{"location":"API/","page":"API","title":"API","text":"A few customized shapes can be added to the canvas very conveniently, for     example, stoma and ellipse. These shortcut functions include","category":"page"},{"location":"API/","page":"API","title":"API","text":"plot_ellipse\nplot_stoma","category":"page"},{"location":"API/#PlotPlants.plot_ellipse","page":"API","title":"PlotPlants.plot_ellipse","text":"plot_ellipse(ax,\n             xy::Tuple{Number,Number};\n             width::Number,\n             height::Number,\n             angle::Number,\n             color::String,\n             edgecolor::String,\n             facecolor::String,\n             alpha::Number)\n\nPlot an ellipse on axis, given\n\nax Axis to plot on\nxy Center of the ellipse\nwidth Width of the ellipse\nheight Height of the ellipse\nangle Rotation angle of the ellipse\ncolor Color of the ellipse\nedgecolor Edgecolor of the ellipse\nfacecolor Face color of the ellipse\nalpha Transparency of the ellipse\n\n\n\n\n\n","category":"function"},{"location":"API/#PlotPlants.plot_stoma","page":"API","title":"PlotPlants.plot_stoma","text":"plot_stoma(ax,\n           xy::Tuple{Number,Number};\n           width::Number,\n           height::Number,\n           stoma::Number,\n           angle::Number)\n\nPlot a stoma on the axis, given\n\nax Axis to plot on\nxy Center of the stoma\nwidth Width of the stoma\nheight Height of the stoma\nstoma Stomatal pore width ratio\nangle Rotation angle of the stoma\n\n\n\n\n\n","category":"function"},{"location":"API/#Set-titles,-lims,-ticks,-and-ticklabels","page":"API","title":"Set titles, lims, ticks, and ticklabels","text":"","category":"section"},{"location":"API/","page":"API","title":"API","text":"Function set_titles! will add panel titles like (a) to all the     panels, and if labels options is given, the labels will be added after     the letter (e.g., (a) label).","category":"page"},{"location":"API/","page":"API","title":"API","text":"set_titles!","category":"page"},{"location":"API/#PlotPlants.set_titles!","page":"API","title":"PlotPlants.set_titles!","text":"set_titles!(\n            array_ax::Array;\n            labels::Array{String,1},\n            paren::Bool,\n            capital::Bool,\n            fontsize::Number,\n            loc::String\n)\n\nSet titles for the axes, given\n\narray_ax An array of axis\nlabels Optional: labels after the panel title, e.g., (a) label\nparen Optional: if true, use format like (a)\ncapital Optional: if true, use capital letters like (A)\nfontsize Optional: fontsize of the title\nloc Optional: location of the title\n\n\n\n\n\n","category":"function"},{"location":"API/","page":"API","title":"API","text":"Similarly, the package provides shortcuts to set the X-axis and Y-axis labels,     limits, ticks, and tick labels.","category":"page"},{"location":"API/","page":"API","title":"API","text":"set_xlabels!\nset_ylabels!\nset_xylabels!\nset_xlims!\nset_ylims!\nset_xylims!\nset_xticks!\nset_yticks!\nset_xyticks!\nset_xticklabels!\nset_yticklabels!\nset_xyticklabels!","category":"page"},{"location":"API/#PlotPlants.set_xlabels!","page":"API","title":"PlotPlants.set_xlabels!","text":"set_xlabels!(\n            array_ax::Array,\n            labels::Array{String,1};\n            fontsize::Number\n)\n\nSet X-axis labels for the axes, given\n\narray_ax An array of axis\nlabels X-axis labels\nfontsize Optional: fontsize of the label\n\n\n\n\n\n","category":"function"},{"location":"API/#PlotPlants.set_ylabels!","page":"API","title":"PlotPlants.set_ylabels!","text":"set_ylabels!(\n            array_ax::Array,\n            labels::Array{String,1};\n            fontsize::Number\n)\n\nSet Y-axis labels for the axes, given\n\narray_ax An array of axis\nlabels Y-axis labels\nfontsize Optional: fontsize of the label\n\n\n\n\n\n","category":"function"},{"location":"API/#PlotPlants.set_xylabels!","page":"API","title":"PlotPlants.set_xylabels!","text":"set_xylabels!(\n            array_ax::Array,\n            xlabels::Array{String,1},\n            ylabels::Array{String,1};\n            fontsize::Number\n)\n\nSet X-axis and Y-axis labels for the axes, given\n\narray_ax An array of axis\nxlabels X-axis labels\nylabels Y-axis labels\nfontsize Optional: fontsize of the label\n\n\n\n\n\n","category":"function"},{"location":"API/#PlotPlants.set_xlims!","page":"API","title":"PlotPlants.set_xlims!","text":"set_xlims!(array_ax::Array, array_xl::Array)\n\nSet the X-axis limits, given\n\narray_ax Array of axis\narray_xl Array of X-axis limits\n\n\n\n\n\n","category":"function"},{"location":"API/#PlotPlants.set_ylims!","page":"API","title":"PlotPlants.set_ylims!","text":"set_ylims!(array_ax::Array, array_yl::Array)\n\nSet the Y-axis limits, given\n\narray_ax Array of axis\narray_yl Array of Y-axis limits\n\n\n\n\n\n","category":"function"},{"location":"API/#PlotPlants.set_xylims!","page":"API","title":"PlotPlants.set_xylims!","text":"set_xylims!(array_ax::Array, array_xl::Array, array_yl::Array)\n\nSet the X-axis limits, given\n\narray_ax Array of axis\narray_xl Array of X-axis limits\narray_yl Array of Y-axis limits\n\n\n\n\n\n","category":"function"},{"location":"API/#PlotPlants.set_xticks!","page":"API","title":"PlotPlants.set_xticks!","text":"set_xticks!(array_ax::Array, array_xtk::Array)\n\nSet X-axis ticks for a given\n\narray_ax Array of axis\narray_xtk Array of X-axis ticks\n\n\n\n\n\n","category":"function"},{"location":"API/#PlotPlants.set_yticks!","page":"API","title":"PlotPlants.set_yticks!","text":"set_yticks!(array_ax::Array, array_ytk::Array)\n\nSet Y-axis ticks for a given\n\narray_ax Array of axis\narray_ytk Array of Y-axis ticks\n\n\n\n\n\n","category":"function"},{"location":"API/#PlotPlants.set_xyticks!","page":"API","title":"PlotPlants.set_xyticks!","text":"set_xyticks!(array_ax::Array, array_xtk::Array, array_ytk::Array)\n\nSet Y-axis ticks for a given\n\narray_ax Array of axis\narray_xtk Array of X-axis ticks\narray_ytk Array of Y-axis ticks\n\n\n\n\n\n","category":"function"},{"location":"API/#PlotPlants.set_xticklabels!","page":"API","title":"PlotPlants.set_xticklabels!","text":"set_xticklabels!(array_ax::Array, array_xtl::Array)\n\nSet X-axis ticks for a given\n\narray_ax Array of axis\narray_xtl Array of X-axis tick labels\n\n\n\n\n\n","category":"function"},{"location":"API/#PlotPlants.set_yticklabels!","page":"API","title":"PlotPlants.set_yticklabels!","text":"set_yticklabels!(array_ax::Array, array_ytl::Array)\n\nSet Y-axis ticks for a given\n\narray_ax Array of axis\narray_ytl Array of Y-axis tick labels\n\n\n\n\n\n","category":"function"},{"location":"API/#PlotPlants.set_xyticklabels!","page":"API","title":"PlotPlants.set_xyticklabels!","text":"set_xyticklabels!(array_ax::Array, array_xtl::Array, array_ytl::Array)\n\nSet X-axis and Y-axis ticks for a given\n\narray_ax Array of axis\narray_xtl Array of X-axis tick labels\narray_ytl Array of Y-axis tick labels\n\n\n\n\n\n","category":"function"},{"location":"API/#Add-regression","page":"API","title":"Add regression","text":"","category":"section"},{"location":"API/","page":"API","title":"API","text":"To quickly plot the regression lines, users may use","category":"page"},{"location":"API/","page":"API","title":"API","text":"plot_line_regress","category":"page"},{"location":"API/#PlotPlants.plot_line_regress","page":"API","title":"PlotPlants.plot_line_regress","text":"plot_line_regress(ax,\n                  list_x::Array,\n                  list_y::Array;\n                  intercept::Bool,\n                  interval::Bool,\n                  color::String,\n                  alpha::Number)\n\nPlor linear regression and confidence interval on the axis, given\n\nax Given axis\nlist_x Array of x\nlist_y Array of y\nintercept Optional: if true, fit the data with an intercept\ninterval Optional: if true, plot the confidence interval of fitted y\ncolor Color the fitted curve\nalpha Transparency of the confidence interval (same color as curve)\n\n\n\n\n\n","category":"function"},{"location":"API/","page":"API","title":"API","text":"The function will filter out the NaN from the given data, make linear     regression using function line_regress, sort the results by the     value of x from low to high, store the results in a     LinearRegressionResult type struct, and plot the regression line     on the given axis. Also, if interval is set to true, the function will     also plot the confidence intervals of the predicted y.","category":"page"},{"location":"API/","page":"API","title":"API","text":"line_regress\nLinearRegressionResult","category":"page"},{"location":"API/#PlotPlants.line_regress","page":"API","title":"PlotPlants.line_regress","text":"line_regress(list_x::Array, list_y::Array; intercept::Bool, sorting::Bool)\n\nMake linear regression and return the fitted results, given\n\nlist_x Array of x, can be NaN\nlist_y Array of y, can be NaN\nintercept Optional: if true use intercept in the fitting\nsorting Optional: if true, sort the values\n\n\n\n\n\n","category":"function"},{"location":"API/#PlotPlants.LinearRegressionResult","page":"API","title":"PlotPlants.LinearRegressionResult","text":"mutable struct LinearRegressionResult\n\nFields\n\nlm\nRegression result\ninter\nIntercept of fitting\nslope\nSlope of fitting\ninter_p\nP value of intercept\nslope_p\nP value of slopes\ninter_ci\nConfidence interval of intercept\nslope_ci\nConfidence interval of slopes\ndf\nPredictions DataFrame\n\n\n\n\n\n","category":"type"},{"location":"API/","page":"API","title":"API","text":"Further, the PlotPlants module provides a quick tool to test whether the slope     differs from a given value, see","category":"page"},{"location":"API/","page":"API","title":"API","text":"line_regress_test_slope","category":"page"},{"location":"API/#PlotPlants.line_regress_test_slope","page":"API","title":"PlotPlants.line_regress_test_slope","text":"line_regress_test_slope(list_x::Array,\n                        list_y::Array;\n                        slope::Number,\n                        intercept::Bool)\n\nMake linear regression and return the p value of whether the regression slope     differs from the given slope, given\n\nlist_x Array of x, can be NaN\nlist_y Array of y, can be NaN\nslope Slope to test\nintercept Optional: if true use intercept in the fitting\n\n\n\n\n\n","category":"function"},{"location":"API/#Statistical-tools","page":"API","title":"Statistical tools","text":"","category":"section"},{"location":"API/","page":"API","title":"API","text":"In many cases, displaying mean absolute (precentage) error make the figure look     much better. Thus, the PlotPlants function provides these convenient     functions.","category":"page"},{"location":"API/","page":"API","title":"API","text":"mae\nmape\nnanmean\nnanstd","category":"page"},{"location":"API/#PlotPlants.mae","page":"API","title":"PlotPlants.mae","text":"mae(x::Array)\n\nReturn the mean absolute error by ommiting the NaN, given\n\ny Array of numbers, can be NaN\npred Array of predictions, can be NaN\n\n\n\n\n\n","category":"function"},{"location":"API/#PlotPlants.mape","page":"API","title":"PlotPlants.mape","text":"mae(x::Array)\n\nReturn the mean absolute percentage error by ommiting the NaN, given\n\ny Array of numbers, can be NaN\npred Array of predictions, can be NaN\n\n\n\n\n\n","category":"function"},{"location":"API/#PlotPlants.nanmean","page":"API","title":"PlotPlants.nanmean","text":"nanmean(x::Array)\n\nReturn the mean of array by ommiting the NaN, given\n\nx Array of numbers, can be NaN\n\n\n\n\n\n","category":"function"},{"location":"API/#PlotPlants.nanstd","page":"API","title":"PlotPlants.nanstd","text":"nanstd(x::Array)\n\nReturn the std of array by ommiting the NaN, given\n\nx Array of numbers, can be NaN\n\n\n\n\n\n","category":"function"}]
}
