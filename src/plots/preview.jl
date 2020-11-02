###############################################################################
#
# Preview NC and TIFF files
#
###############################################################################
"""
    preview_dataset(filename::String, label)
    preview_dataset(filename::String, label::String, format::FormatNC)

Preview dataset, given
- `filename` Dataset file to preview
- `label` Label of the data to preview, variable name in NC files, band name in
    TIFF files
- `format` [`AbstractFormat`](@ref) type file format
"""
function preview_dataset(filename::String, label)
    if filename[end-2:end]==".nc" && typeof(label)==String
        preview_dataset(filename, label, FormatNC());
    else
        @warn "File format and label type is not supported!"
    end

    return nothing
end




function preview_dataset(filename::String, label::String, format::FormatNC)
    data = ncread(filename, label);
    dims = size(data);

    # plot figure
    if length(dims)==2
        println("Dataset is 2D, plotting it using imshow...");
        imshow(data', origin="lower");
    elseif length(dims)==3
        println("Dataset is 3D, plotting the 1st layer using imshow...");
        imshow(data[:,:,1]', origin="lower");
    end

    return nothing
end
